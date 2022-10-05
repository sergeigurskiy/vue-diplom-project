<template>
    <div class="block-card__column">
      <router-link :to="to">
        <div class="block-card__item">
          <div class="block-card__img">
            <img :src='src' alt="" />
          </div>
          <div class="block-card__title">{{title}}</div>
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
      props:{
        to:{
          type:String
        },
        src:{
          type:String
        },
        title:{
          type:String
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>