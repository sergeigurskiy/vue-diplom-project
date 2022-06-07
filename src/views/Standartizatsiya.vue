<template>
  <div class="block-page">
    <div class="block-services">
    <Container>
      <div class="block-services-body block-services-body--up">
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
