<template>
  <div class="wrapper">
    <TheHeader :isOpen="isOpen" @handlerOpen="handlerOpen" />
    <TheMainImg />
    <Plashka :styles="isOpen ? 'open' : ''" @handlerClose="handlerClose" />
    <TheNavigation
      :styles="isOpen ? 'open' : ''"
      @handlerClose="handlerClose"
    />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheMainImg from "../components/TheMainImg.vue";
import TheHeader from "../components/TheHeader.vue";
import Plashka from "../components/Plashka.vue";
import TheNavigation from "../components/TheNavigation.vue";
import TheFooter from "../components/TheFooter.vue";
import listMixin from '../mixins/listMixin'
export default {
  mixins:[listMixin],
  components: {
    TheHeader,
    Plashka,
    TheNavigation,
    TheFooter,
    TheMainImg,
  },
};
</script>
