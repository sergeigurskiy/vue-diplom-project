<template>
  <section class="block-main">
    <TheCards />
    <TheInfo />
    <TheServices />
    <TheCommunications />
  </section>
</template>

<script>
import TheMainImg from "../components/TheMainImg.vue";
import TheCards from "../components/TheCards.vue";
import TheInfo from "../components/TheInfo.vue";
import TheServices from "../components/TheServices.vue";
import TheCommunications from "../components/TheCommunications.vue";
export default {
  components: {
    TheMainImg,
    TheCards,
    TheInfo,
    TheServices,
    TheCommunications,
  },
};
</script>
