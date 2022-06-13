<template>
  <div class="block-page">
    <div class="block-services">
    <Container>
      <div class="block-services__title">{{metrologyData.title}}</div>
      <div class="block-services-body block-services-body--up">
        <Sublink
          v-for="link in metrologyData.data"
          :key="link.id"
          :title="link.title"
          :sublinks="link.sublinks"
          :isOpenDrop="link.isOpenDrop"
          @click="handlerClick(link.id, metrologyData.mapName)"
        />
      </div>
    </Container>
  </div>
  </div>
</template>

<script>
import Sublink from '../components/Sublink.vue'
import Container from "../components/Container.vue";
export default {
  components: {
    Container,
    Sublink
  },
  methods:{
    handlerClick(id, map){
      return this.$store.commit('openLinks', {
        id,
        map
      })
    }
  },
  computed:{
    metrologyData(){
      return this.$store.getters.metrologyData
    }
  }
};
</script>

