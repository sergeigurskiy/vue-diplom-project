<template>
  <div class="block-communications">
      <div class="info-title">Контактная информация</div>
      <div class="block-communications-body">
        <div class="block-communications-body__connect">
          <div class="block-communications-body__column">
            <div class="block-communications-body__item">
              <div class="block-communications-body__img">
                <img src="../assets/img/communicate/01.svg" alt="" />
              </div>
              <div class="block-communications-body__title">Адрес:</div>
              <div class="block-communications-body__desc">
                246019, г. Гомель, ул. Советская, 102 (учебный корпус № 5, каб.
                3-6, 3-9, 3-8)
              </div>
            </div>
          </div>
          <div class="block-communications-body__column">
            <div class="block-communications-body__item">
              <div class="block-communications-body__img">
                <img src="../assets/img/communicate/02.svg" alt="" />
              </div>
              <div class="block-communications-body__title">
                Электроная почта:
              </div>
              <div class="block-communications-body__desc">
                aleshkevich@gsu.by
              </div>
            </div>
          </div>
          <div class="block-communications-body__column">
            <div class="block-communications-body__item">
              <div class="block-communications-body__img">
                <img src="../assets/img/communicate/03.svg" alt="" />
              </div>
              <div class="block-communications-body__title">Телефон:</div>
              <div class="block-communications-body__desc">(0232) 50-38-23</div>
            </div>
          </div>
          <div class="block-communications-body__column">
            <div class="block-communications-body__item">
              <div class="block-communications-body__img">
                <img src="../assets/img/communicate/04.svg" alt="" />
              </div>
              <div class="block-communications-body__title">Факс:</div>
              <div class="block-communications-body__desc">(0232) 56-30-02</div>
            </div>
          </div>
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
import Map from "../components/Map.vue";
import imgGguScorina from "../assets/img/gguPhoto.jpg";
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
  components: {
    Map,
  },
};
</script>

<style lang="scss" scoped>
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
