<template>
  <div class="block-communications">
      <div class="info-title">Контактная информация</div>
      <div class="block-communications-body">
        <div class="block-communications-body__connect">
          <CommItem
            v-for="(link, index) in communicationLinks"
            :key="link.title"
            :title="link.title"
            :desc="link.desc"
            :src="require(`../../assets/img/communicate/0${index + 1}.svg`)"
          />
        </div>
        <div class="block-communications-body__map">
          <Map
            :settingsBase="settingsBase"
            :settingsMap="settingsMap"
            :settingsPlacemarks="settingsPlacemarks"
            id="map"
          />
        </div>
      </div>
  </div>
</template>

<script>
import Map from "../Map.vue";
import imgGguScorina from "../../assets/img/gguPhoto.jpg";
import CommItem from './CommItem.vue'
export default {
  data() {
    return {
      settingsBase: {
        apiKey: "38eaff38-fbde-43a4-af27-0f78b641ffec",
        lang: "ru_RU",
      },
      settingsMap: {
        zoom: 17,
        mapCenter: [52.441990950824255, 31.0018740931301],
      },
      settingsPlacemarks: [
        {
          centerPlacemark: [52.441990950824255, 31.0018740931301],
          ballunContent: {
            text: "ГГУ имени Франциска Скорины, корпус № 5",
            imgBallun: imgGguScorina,
          },
          iconCaption: "ГГУ имени Франциска Скорины",
          presetPlacemark: "islands#redIcon",
        },
      ],
    };
  },
  computed:{
    communicationLinks(){
      return this.$store.getters.communicationLinks
    }
  },
  components: {
    Map,
    CommItem
  },
};
</script>

<style lang="scss">
.block-communications {
  padding: 120px 0 64px 0;
  &-body {
    display: flex;
    text-align: center;
    &__connect {
      flex: 0 1 50%;
      background-color: #4971a1;
      display: flex;
      flex-wrap: wrap;
      padding: 30px 10px 0;
      box-sizing: border-box;
    }
    &__column {
      flex: 0 1 50%;
      &:not(:last-child) {
        margin-bottom: 30px;
        transform: scale(1);
        transition: .3s ease transform;
      }
      &:hover{
        transform: scale(1.04);
        transition: .3s ease transform;
      }
    }
    &__item {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__img {
      height: 70px;
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin: 0 auto 20px;
      & img {
        max-width: 100%;
      }
    }
    &__title {
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.01em;
      color: #ffffff;
      margin-bottom: 10px;
    }
    &__desc {
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.01em;
      color: #ffffff;
      flex: 1 1 auto;
    }
    &__map {
      flex: 0 1 50%;
    }
  }
}

@media (max-width: 1120px) {
  .block-communications-body {
    display: block;
  }
  .block-communications-body__column {
    padding: 0 7px;
    box-sizing: border-box;
  }
  .block-communications {
    padding: 60px 0 20px 0;
  }
}
@media (max-width: 425px) {
  .block-communications-body__connect {
    display: block;
    padding-bottom: 30px;
  }
  .block-communications-body__img {
    width: 50px;
    height: 50px;
  }
  .block-communications-body__title {
    font-size: 16px;
    line-height: 19px;
  }
  .block-communications-body__desc {
    font-size: 15px;
    line-height: 18px;
  }
}
</style>
