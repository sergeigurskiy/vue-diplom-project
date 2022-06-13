<template>
    <div :class="['block-services-body__item', isOpenDrop ? 'open' : '']">
        <div class="block-services-body__name">
            <div class="block-services-body__title">{{title}}</div>
            <div v-if="sublinks" :class="['block-services-body__arrow', isOpenDrop ? 'open' : '']"><img src="../assets/img/arrowLeft.svg" alt=""></div>
        </div>
        <ul v-if="sublinks" class="block-services-body__list">
            <li
                v-for="link in sublinks"
                :key="link.id"
                class="block-services-body__link"
                @click.stop="$emit('handlerOpen', link.id, mapName, id)"   
            >{{link.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods:{
            
        },
        props:{
            title:{
                type:String,
                required:true
            },
            sublinks:{
                required:false,
            },
            isOpenDrop:{
                type:Boolean,
                required:false
            },
            mapName:{
                type:String,
                required:false
            },
            id:{
                type:Number,
                required:false
            }

        }
    }
</script>

<style lang="scss">
    .block-services-body__list{
        // background-color: #f1f1f1; 
        display: none;       
    }
    .block-services-body__link{
        position: relative;
        z-index: 2;
        background-color: #f1f1f1;
        margin-left: 57px;
        padding: 13px 26px;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: 0.01em;
        color: #000000;
        text-transform: uppercase;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        &:not(:last-child):hover{
            border-color: silver;
        }
    }
    .block-services-body__item.open .block-services-body__list{
        display: block;
    }
    .block-services-body__arrow{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translate(-50%,-50%) rotate(-90deg);
        z-index: 3;
        &.open{
            transform: translate(-50%,-50%) rotate(90deg)
        }
    }
    .block-services-body__name{
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        font-family: "Open-Sans", sans-serif;
        position: relative;
        cursor: pointer;
    }
    
</style>