<template>
  <div class="block-services">
    <Container>
      <div class="info-title">Услуги</div>
      <div class="block-services-body">
        <div class="block-services-body__item">
          <div class="block-services-body__title">
            Предоставление необходимых документов, имеющихся в наличии, для
            ознакомления при посещении бюро
          </div>
        </div>
        <div class="block-services-body__item">
          <div class="block-services-body__title">
            Регистрация и актуализация копий ТНПА
          </div>
        </div>
        <div class="block-services-body__item">
          <div class="block-services-body__title">
            Предоставление оперативной библиографической информации о документах
            (о введении ТНПА, сроках действия, внесенных изменениях, пересмотре,
            замене и отмене и т. д.)
          </div>
        </div>
        <div class="block-services-body__item">
          <div class="block-services-body__title">
            Оказание помощи в поиске и подборе нормативно-технической
            документации по требуемой тематике
          </div>
        </div>
        <div class="block-services-body__item">
          <div class="block-services-body__title">
            Абонементное обслуживание
          </div>
        </div>
        <div class="block-services-body__item">
          <div class="block-services-body__title">
            Прием заявок на заказ и приобретение ТНПА
          </div>
        </div>
        <div class="block-services-body__item">
          <div class="block-services-body__title">
            Практическая помощь студентам и преподавателям в оформлении курсовых
            и дипломных работ, отчетов по НИР
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../components/Container.vue";
export default {
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
.block-services {
  padding: 0 0 125px 0;
}
.block-services-body {
  &__item {
    position: relative;
    min-height: 50px;
    background-color: #f1f1f1;
    border-radius: 20px;
    overflow: hidden;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 82.94px;
      background: #4971a1;
      border-radius: 20px;
    }
  }
  &__title {
    position: relative;
    z-index: 2;
    min-height: 50px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    margin-left: 57px;
    padding: 3px 26px;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #000000;
  }
}
@media (max-width: 500px) {
  .block-services-body__title {
    font-size: 16px;
    line-height: 19px;
  }
}
@media (max-width: 1024px) {
  .block-services {
    padding: 0 0 70px 0;
  }
}
</style>
