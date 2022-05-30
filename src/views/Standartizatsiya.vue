<template>
  <div class="block-services">
    <Container>
      <div class="block-services-body">
        <div class="block-services-body__item">
          <router-link to="/fond_tnpa">
            <div class="block-services-body__title">ФОНД ТНПА</div>
          </router-link>
        </div>

        <div class="block-services-body__item">
          <router-link class="list-submenu__item" to="/periodicheskie_izdaniya">
            <div class="block-services-body__title">ПЕРЕОДИЧЕСКИЕ ИЗДАНИЯ</div>
          </router-link>
        </div>

        <div class="block-services-body__item">
          <div class="block-services-body__title">ДОКУМЕНТЫ</div>
        </div>
        <div class="block-services-body__item">
          <a href="https://drive.google.com/file/d/1avO2sDitY7aEGpYXYA3gVNZolEEIIfga/preview" target="_blank" class="block-services-body__title">
            СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ
          </a>
        </div>
        <div class="block-services-body__item">
          <a href="https://drive.google.com/file/d/1jJqlo5SossLtExTI6xkYjrpnGq5WE0m-/preview" target="_blank" class="block-services-body__title">
            СТП 04-2011 КУРСОВЫЕ РАБОТЫ
          </a>
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
