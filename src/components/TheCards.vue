<template>
  <div class="block-card">
    <PageLink
      v-for="(card, index) in pageCards"
      :key="card.to"
      :to="card.to"
      :src="require(`../assets/img/cards/img0${index + 1}.svg`)"
      :title="card.name"
    />
  </div>
</template>

<script>
import PageLink from './Navigations/PageLink.vue'
export default {
  computed:{
    pageCards(){
      return this.$store.getters.pageCards
    }
  },
  components:{
    PageLink,
  }
};
</script>

<style lang="scss">
.block-card {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -22px;
  text-align: center;
  justify-content: center;
  &__column {
    transition: .2s ease transform;
    padding: 0 22px;
    box-sizing: border-box;
    flex: 0 1 25%;
    margin-bottom: 30px;
  }
  &__item {
    transform: translateY(0);
    background: #f9f9f9;
    box-sizing: border-box;
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    padding: 75px 5px 10px;
    min-width: 260px;
    min-height: 310px;
    height: 100%;
    cursor: pointer;
    border-top: 5px solid transparent;
    transition: 0.2s ease all;
    &:hover {
      border-top: 5px solid #4971a1;
      transition: 0.2s ease all;
      transform: translateY(-10px);
    }
  }
  &__img {
    height: 70px;
    width: 70px;
    display: flex;
    align-items: flex-end;
    margin: 0 auto 30px;
    & img {
      max-width: 100%;
    }
  }
  &__title {
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #040844;
    font-family: "Open-Sans", sans-serif;
    flex: 1 1 auto;
    text-transform: uppercase;
  }
  &__desc {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #45484e;
    max-width: 220px;
    margin: 0 auto;
  }
}
@media (max-width: 600px) {
  .block-card__title {
    font-size: 18px;
    line-height: 25px;
  }
  .block-card__desc {
    font-size: 16px;
    line-height: 19px;
  }
  .block-card__img {
    height: 45px;
    width: 45px;
  }
}
</style>
