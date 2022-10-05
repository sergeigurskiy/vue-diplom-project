<template>
        <div class="block-emp-body__column">
            <div class="block-emp-body__item">
              <div class="block-emp-body__image">
                <div class="block-emp-body__img">
                  <img :src="src" alt="">
                </div>
              </div>
              <div class="block-emp-body__title">
                <span>{{jobName}}</span><span>{{name}}</span><span>{{place}}</span>
              </div>
            </div>
        </div>
</template>

<script>
    export default {
        props:{
            src:{type:String},
            name:{type:String},
            place:{type:String},
            jobName:{type:String},
        }
    }
</script>

<style lang="scss" scoped>

</style>