<template>
<div class="wrapper">
  <TheHeader :isOpen="isOpen" @handlerOpen="handlerOpen" />
  <Plashka :styles="isOpen ? 'open' : ''" @handlerClose="handlerClose" />
  <TheNavigation
      :styles="isOpen ? 'open' : ''"
      @handlerClose="handlerClose"
    />
  <div class="wrapper-error">
   <div class="wrapper-error__body">
      <h1 class="wrapper-error__title">страница не найдена</h1>
    <div class="wrapper-error__image">
      <img src="../assets/img/Error.png" alt="" />
    </div>
    <router-link to="/" class="wrapper-error__button"
      >Вернуться на главную страницу</router-link
    >
   </div>
  </div>
</div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import Plashka from "../components/Plashka.vue";
import TheNavigation from "../components/Navigations/TheNavigation.vue";
export default {
  components: {
    TheHeader,
    Plashka,
    TheNavigation
  },
};
</script>

<style lang="scss">
.wrapper-error {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 38px 0 20px 0;
  box-sizing: border-box;
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #040844;
  }
  &__image {
    max-width: 506px;
    max-height: 391px;
    margin: 30px 0px 45px;
  }
  &__image img {
    max-width: 100%;
    height: 100%;
  }
  &__button {
    margin: 0 auto;
    display: block;
    width: 251px;
    padding: 13px 21px;
    background: #2e4873;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
}
</style>
