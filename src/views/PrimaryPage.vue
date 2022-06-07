<template>
  <div class="block-page">
    <Container>
      <TheCards />
      <TheInfo />
      <TheServices />
      <TheCommunications />
    </Container>
  </div>
</template>

<script>
import TheMainImg from "../components/TheMainImg.vue";
import TheCards from "../components/TheCards.vue";
import TheInfo from "../components/TheInfo.vue";
import TheServices from "../components/TheServices.vue";
import TheCommunications from "../components/TheCommunications.vue";
import Container from "../components/Container.vue";
export default {
  components: {
    TheMainImg,
    TheCards,
    TheInfo,
    TheServices,
    TheCommunications,
    Container
  },
};
</script>
