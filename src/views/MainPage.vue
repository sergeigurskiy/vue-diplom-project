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
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handlerOpen() {
      document.body.classList.add("fixed");
      this.isOpen = !this.isOpen;
      if (!this.isOpen) {
        document.body.classList.remove("fixed");
      }
    },
    handlerClose() {
      document.body.classList.remove("fixed");
      this.isOpen = false;
    },
  },
  components: {
    TheHeader,
    Plashka,
    TheNavigation,
    TheFooter,
    TheMainImg,
  },
};
</script>
<style>
.wrapper {
  overflow: hidden;
  min-height: 100vh;
  padding-top: 70px;
}
</style>
