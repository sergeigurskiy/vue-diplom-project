<template>
  <div class="block-info">
      <div class="block-info__wrapp">
        <div class="block-info__desc">
          <div class="block-info__title">Общая информация</div>
          <div class="block-info__subtitle">
            Бюро стандартизации и метрологии (БСиМ) является структурным
            подразделением учреждения образования «Гомельский государственный
            университет имени Франциска Скорины», подчиняется проректору
            университета по научной работе и осуществляет свою деятельность под
            методическим руководством головной организации по стандартизации и
            метрологическому обеспечению Министерства образования Республики
            Беларусь и территориальных органов Государственного комитета по
            стандартизации Республики Беларусь (Госстандарта). БСиМ осуществляет
            комплекс работ по обеспечению функционирования системы менеджмента
            качества (СМК) университета, по стандартизации и метрологическому
            обеспечению научных исследований, образовательного процесса и
            хозяйственной деятельности университета.
          </div>
        </div>
        <div class="block-info__image">
          <div class="block-info__img">
            <img src="../assets/img/info-bg.jpg" alt="" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.block-info {
  padding: 90px 0 120px;
  &__wrapp {
    display: flex;
    align-items: center;
  }
  &__image {
    flex-basis: 48.5%;
  }
  &__img {
    position: relative;
    padding: 0 0 100% 0;
    overflow: hidden;
    & img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      width: 100%;
      object-fit: cover;
      display: block;
    }
  }
  &__desc {
    flex: 0 1 51.3%;
    padding-right: 80px;
    color: #000;
    & *:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  &__title {
    font-family: "Open-Sans", sans-serif;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 0.03em;
  }
  &__subtitle {
    text-align: justify;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.03em;
  }
}
@media (max-width: 1024px) {
  .block-info__desc {
    padding-right: 30px;
  }
  .block-info__title {
    font-size: 20px;
    line-height: 32px;
  }
  .block-info__subtitle {
    font-size: 16px;
    line-height: 19px;
  }
  .block-info {
    padding: 50px 0 70px;
  }
}
@media (max-width: 670px) {
  .block-info__desc {
    padding-right: 0px;
    flex: 1 1 auto;
    margin-bottom: 30px;
  }
  .block-info__wrapp {
    flex-wrap: wrap;
  }
  .block-info__image {
    flex-basis: 100%;
  }
  .block-info__img {
    padding: 0 0 40% 0;
  }
}
</style>
