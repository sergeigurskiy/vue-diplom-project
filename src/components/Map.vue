<template>
      <div v-if="!errorLoading" :ref="id" :id="id">
        <div v-if="loader" class="map-loader"><span></span></div>
      </div>
      <div v-else class="map-err">с картой что-то случилось...</div>
</template>

<script>
import { loadYmap } from 'vue-yandex-maps';
import mapInit from '../helpers/map/mapInit';
    export default {
      data(){
        return {
          mapData:null,
          errorLoading:false,
          loader:false
        }
      },
      async mounted(){
        this.mapData = {...this.settingsMap, selector:this.$refs.map}
        try{
          this.loader = true
          await loadYmap(this.settingsBase);
          this.loader = false
          ymaps.ready(mapInit(this.mapData, this.settingsPlacemarks,ymaps))
        }
        catch (err) {
          console.warn(err);
          this.errorLoading = true
          this.loader = false
        }
      },
      props:{
        settingsBase:{
          type:Object,
          required:true,
          default:{}
        },
        settingsMap:{
          type:Object,
          required:true,
        },
        settingsPlacemarks:{
          type:Array,
          required:true,
        },
        id:{
          type:String,
          required:true
        }
      }
    }
</script>

<style lang="scss" scoped>
    #map{
        max-width: 647px; 
        height: 100%;
        position: relative;
    }
    .map-err{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      padding: 50px;
      box-sizing: border-box;
      line-height: 50px;
    }
    .map-loader{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 5;
      & span{
        display: block;
        height: 80px;
        width: 80px;
        border: 10px solid silver;
        border-top: 10px solid #fff;
        border-radius: 100%;
        animation: spinner infinite .5s linear;
      }
    }
    @keyframes spinner {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(360deg);
      }
    }
    @media(max-width:1120px){
      #map{
            height: 300px;
            max-width: 100%;
      }
    }
</style>