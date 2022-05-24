<template>
    <div @click="$emit('handlerClose')" class="plashka" :class="styles"></div>
</template>

<script>
    export default {
        props:{
            styles:{
                type:String,
                require:true,
                default:'',
                validator(value){
                    return ['open', ''].includes(value)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .plashka{
        position: fixed;
        top: 0;
        z-index: 4;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(57, 94, 138, 0.6);
        transition: all .2s ease;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        cursor: pointer;
        &.open{
            opacity: 1;
            visibility: visible;
            pointer-events: all;
            transition: opacity .2s ease;
        }
    }
</style>