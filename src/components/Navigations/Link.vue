<template>
    <li :class="[classLink, isOpenDrop ? 'open' : '']">
        <div v-if="!sublinks" :class="classItem">{{title}}</div>    
        <div v-else :class="classItem">{{title}}<span :class="['list-menu__arrow', isOpenDrop ? 'active' : '' ]"></span></div>
        <ul v-if="sublinks" class="list-submenu">
            <li
                v-for="link in sublinks"
                :key="link.title"
                class="list-submenu__link"
                @click.stop="openLink(linkId, link.id)"
            >
                <div class="list-submenu__item" >{{link.title}}</div>
            </li>
        </ul>
    </li>
</template>

<script>
    export default {
        methods:{
            openLink(id, idLink){
                return this.$store.commit('redirectTo', {
                    id,
                    idLink
                })
            }
        },
        props:{
            title:{
                type:String,
                required:true
            },
            to:{
                type:String,
                required:false,
                default:null
            },
            classLink:{
                type:String,
                required:true
            },
            classItem:{
                type:String,
                required:true
            },
            sublinks:{
                type:Array,
                required:false,
                default:null
            },
            linkId:{
                type:Number,
                required:true
            },
            isOpenDrop:{
                type:Boolean,
                required:false
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>