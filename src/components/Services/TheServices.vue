<template>
  <div class="block-services">
      <div class="info-title">Услуги</div>
      <div class="block-services-body">
        <SeviceContent
          v-for="(content, index) in sevicesContent"
          :key="index"
          :title="content.title"
        />
      </div>
  </div>
</template>

<script>
import SeviceContent from './SeviceContent.vue'
export default {
  computed:{
    sevicesContent(){
      return this.$store.getters.sevicesContent
    }
  },
  components: {
    SeviceContent
  },
};
</script>


