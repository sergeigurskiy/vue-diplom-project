import store from "@/store";
import router from "../router/index";

export function openDrop (state, id) {
    return state.map((link, index) => {
        if(index === (id - 1) && link.sublinks && link.hasOwnProperty('isOpenDrop')){
            return {...link, isOpenDrop: !link.isOpenDrop}
        } else if(index === (id - 1) && !link.sublinks && !link.href && link.to){
            router.push(link.to)
            store.commit('handlerClose')
        } else if (index === (id - 1) && !link.sublinks && link.href){
            window.open(link.href)
        }
        return link.hasOwnProperty('isOpenDrop') ? {...link, isOpenDrop:false} : {...link}
    })
}

export function redirect (state, count, idLink, mainId = null) {
    const link = state[count].data[mainId - 1].sublinks[idLink - 1]
    console.log(link);
    if(link.href){
        window.open(link.href)
    } else if (link.to && !link.href) {
        router.push(link.to)
        store.commit('handlerClose')
    } else {
        return false
    }
}