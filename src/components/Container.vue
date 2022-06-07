<template>
    <div class="container" :class="empoloyess">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        empoloyess:{
            type:String,
            required:false,
            validator(value){
                return ['container','container--emp'].includes(value)
            }
        }
    }
}
</script>

<style lang="scss">
    .container{
        max-width: 1317px;
        padding: 0 12px;
        margin: 0 auto;
        &--emp{
            max-width: 886px;
        }
    }
</style>