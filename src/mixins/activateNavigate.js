export const activateNavigate = {
    methods:{
        handlerOpen(){
          return this.$store.commit('handlerOpen')
        },
        handlerClose(){
          return this.$store.commit('handlerClose')
        },
      },
      computed:{
        open(){
          return this.$store.getters.isOpen
        }
      },
}