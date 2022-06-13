<template>
<div class="block-page">
  <div class="block-services">
    <Container>
      <div class="block-services__title">{{protectionData.title}}</div>
      <div class="block-services-body block-services--up">
        <Sublink
          v-for="link in protectionData.data"
          :key="link.id"
          :title="link.title"
          :sublinks="link.sublinks"
          :isOpenDrop="link.isOpenDrop"
          :mapName="protectionData.mapName"
          :id="link.id"
          @handlerOpen="handlerOpen"
          @click="handlerClick(link.id, protectionData.mapName)"
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
    },
    handlerOpen(id, mapName, mainId){
      return this.$store.commit('redirectLinks', {
        id,
        mapName,
        mainId
      })
    }
  },
  computed:{
    protectionData(){
      return this.$store.getters.protectionData
    }
  },
  components: {
    Container,
    Sublink
  },
};
</script>

