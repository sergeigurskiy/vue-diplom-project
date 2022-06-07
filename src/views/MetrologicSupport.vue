<template>
  <div class="block-page">
    <div class="block-services">
    <Container>
      <div class="block-services-body block-services-body--up">
        <div class="block-services-body__item">
          <router-link to="/">
            <div class="block-services-body__title">нормативные документы</div>
          </router-link>
        </div>

        <div class="block-services-body__item">
          <router-link class="list-submenu__item" to="/">
            <div class="block-services-body__title">
              перечень СИ ГГУ

            </div>
          </router-link>
        </div>

        <div class="block-services-body__item">
          <a href="https://drive.google.com/file/d/13t5NktsPGUSk-t6HKkI3doF7QZx2fuuK/preview" target="_blank" class="list-submenu__item" to="/">
            <div class="block-services-body__title">
              Метрологическая оценка СИ

            </div>
          </a>
        </div>
        <div class="block-services-body__item">
          <a href="https://drive.google.com/file/d/1ZveAOZ6F3lJwHbDBlXF9tfGtX3vZNHPX/preview" target="_blank" class="list-submenu__item">
            <div class="block-services-body__title">
              метрологические проработки НИР

            </div>
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

