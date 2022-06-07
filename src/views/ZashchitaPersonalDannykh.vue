<template>
<div class="block-page">
  <div class="block-services">
    <Container>
      <div class="block-services-body block-services--up">
        <div class="block-services-body__item">
          <a href="https://drive.google.com/file/d/1qOEfstG4nSGJeXjA7mlyXhtMyV1oPGa6/preview" target="_blank">
            <div class="block-services-body__title">
              НАЦИОНАЛЬНОЕ РЕГУЛИРОВАНИЕ
            </div>
          </a>
        </div>

        <div class="block-services-body__item">
          <router-link to="/localData" class="list-submenu__item">
            <div class="block-services-body__title">ЛОКАЛЬНОЕ НПА</div>
          </router-link>
        </div>

        <div class="block-services-body__item">
          <router-link class="list-submenu__item" to="/">
            <div class="block-services-body__title">
              ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ
            </div>
          </router-link>
        </div>
        <div class="block-services-body__item">
          <router-link class="list-submenu__item" to="/">
            <div class="block-services-body__title">ВНУТРЕННИЙ КОНТРОЛЬ</div>
          </router-link>
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

