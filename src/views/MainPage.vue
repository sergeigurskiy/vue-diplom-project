<template>
  <div class="wrapper">
    <TheHeader :isOpen="open" @handlerOpen="handlerOpen" />
    <TheMainImg />
    <Plashka :styles="open ? 'open' : ''" @handlerClose="handlerClose" />
    <TheNavigation
      :styles="open ? 'open' : ''"
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
import TheNavigation from "../components/Navigations/TheNavigation.vue";
import TheFooter from "../components/TheFooter.vue";
import {activateNavigate} from '../mixins/activateNavigate'
export default {
  mixins:[activateNavigate],
  components: {
    TheHeader,
    Plashka,
    TheNavigation,
    TheFooter,
    TheMainImg,
  },
};
</script>
