<template>
  <Container>
    <div class="block-info-body">
      <div class="block-info-body__column">
        <router-link to="/standartizatsiya">
          <div class="block-info-body__item">
            <div class="block-info-body__img">
              <img src="../assets/img/cards/01.svg" alt="" />
            </div>
            <div class="block-info-body__title">СТАНДАРТИЗАЦИЯ</div>
          </div>
        </router-link>
      </div>

      <div class="block-info-body__column">
        <a
          href="https://www.gsu.by/ru/quality-management-system"
          target="_blank"
        >
          <div class="block-info-body__item">
            <div class="block-info-body__img">
              <img src="../assets/img/cards/02.svg" alt="" />
            </div>
            <div class="block-info-body__title">МЕНЕДЖЕМЕНТ КАЧЕСТВА</div>
          </div>
        </a>
      </div>

      <div class="block-info-body__column">
        <router-link to="/metrologicheskoe_obespechenie">
          <div class="block-info-body__item">
            <div class="block-info-body__img">
              <img src="../assets/img/cards/03.svg" alt="" />
            </div>
            <div class="block-info-body__title">
              МЕТРОЛОГИЧЕСКОЕ ОБЕСПЕЧЕНИЕ
            </div>
          </div>
        </router-link>
      </div>

      <div class="block-info-body__column">
        <router-link to="/zashchita_personal_dannykh">
          <div class="block-info-body__item">
            <div class="block-info-body__img">
              <img src="../assets/img/cards/04.svg" alt="" />
            </div>
            <div class="block-info-body__title">ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ</div>
          </div>
        </router-link>
      </div>
    </div>
  </Container>
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
.block-info-body {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -22px;
  text-align: center;
  justify-content: center;
  &__column {
    padding: 0 22px;
    box-sizing: border-box;
    flex: 0 1 25%;
    margin-bottom: 30px;
  }
  &__item {
    background: #f9f9f9;
    box-sizing: border-box;
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    padding: 75px 5px 10px;
    min-width: 260px;
    min-height: 310px;
    cursor: pointer;
    border-top: 5px solid transparent;
    transition: 0.2s ease all;
    &:hover {
      border-top: 5px solid #4971a1;
      transition: 0.2s ease all;
    }
  }
  &__img {
    height: 70px;
    width: 70px;
    display: flex;
    align-items: flex-end;
    margin: 0 auto 30px;
    & img {
      max-width: 100%;
    }
  }
  &__title {
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #040844;
    font-family: "Open-Sans", sans-serif;
    flex: 1 1 auto;
  }
  &__desc {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #45484e;
    max-width: 220px;
    margin: 0 auto;
  }
}
@media (max-width: 600px) {
  .block-info-body__title {
    font-size: 18px;
    line-height: 25px;
  }
  .block-info-body__desc {
    font-size: 16px;
    line-height: 19px;
  }
  .block-info-body__img {
    height: 45px;
    width: 45px;
  }
}
</style>
