<template>
       <div class="block-communications-body__column">
            <div class="block-communications-body__item">
              <div class="block-communications-body__img">
                <img :src="src" alt="" />
              </div>
              <div class="block-communications-body__title">{{title}}</div>
              <div class="block-communications-body__desc">
                {{desc}}
              </div>
            </div>
        </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String
            },
            desc:{
                type:String
            },
            src:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>