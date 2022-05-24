<template>
  <div class="header">
    <Container>
      <div class="header__body">
        <router-link to="/">
          <div class="header-logo">
            <div class="header-logo__img">
              <img src="../assets/img/logo.png" alt="" />
            </div>
            <div class="header-logo__name">
              БЮРО СТАНДАРТИЗАЦИИ И МЕТРОЛОГИИ
            </div>
          </div>
        </router-link>
        <div @click="$emit('handlerOpen')" class="header-menu">МЕНЮ</div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../components/Container.vue";
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 5px 0;
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: #fff;
  top: 0;
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 23px;
    line-height: 26.95px;
    letter-spacing: 0.1em;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 17.95px;
    }
  }
  &-logo {
    display: flex;
    align-items: center;
    &__name {
      color: #040844;
    }
    &__img {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      & img {
        max-width: 100%;
        height: auto;
      }
    }
    & *:not(:last-child) {
      margin-right: 10px;
    }
  }
  &-menu {
    color: #040844;
    cursor: pointer;
    overflow: hidden;
  }
}
</style>
