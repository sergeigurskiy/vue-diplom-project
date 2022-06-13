<template>
  <div class="block-page">
    <div class="block-services">
    <Container>
      <div class="block-services__title">{{qualitiData.title}}</div>
      <div class="block-services-body block-services-body--up">
        <Sublink
          v-for="link in qualitiData.data"
          :key="link.id"
          :title="link.title"
          :sublinks="link.sublinks"
          :isOpenDrop="link.isOpenDrop"
          @click="handlerClick(link.id, qualitiData.mapName)"
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
  methods:{
    handlerClick(id, map){
      return this.$store.commit('openLinks', {
        id,
        map
      })
    }
  },
  computed:{
    qualitiData(){
      return this.$store.getters.qualitiData
    }
  },
  components: {
    Container,
    Sublink
  },
};
</script>

