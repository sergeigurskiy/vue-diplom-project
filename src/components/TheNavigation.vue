<template>
  <div class="list" :class="styles">
    <div class="list__wrapp">
      <ul @click="openDropdown" class="list-menu">
        <li class="list-menu__link">
          <router-link class="list-menu__item" to="/primary"
            >ГЛАВНАЯ</router-link
          >
        </li>
        <li class="list-menu__link">
          <router-link
            class="list-menu__item"
            to="/osnovnye_napravleniya_deyatelnosti"
            >ОСНОВНЫЕ НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</router-link
          >
        </li>
        <li class="list-menu__link">
          <router-link class="list-menu__item" to="/sotrudniki"
            >СОТРУДНИКИ</router-link
          >
        </li>
        <li class="list-menu__link list-menu__link--dropdown">
          <a class="list-menu__item" href="#"
            >СТАНДАРТИЗАЦИЯ <span class="list-menu__arrow"></span
          ></a>
          <ul class="list-submenu">
            <li class="list-submenu__link">
              <router-link to="/fond_tnpa" class="list-submenu__item" href="#"
                >ФОНД ТНПА</router-link
              >
            </li>
            <li class="list-submenu__link">
              <router-link
                class="list-submenu__item"
                to="/periodicheskie_izdaniya"
                >ПЕРЕОДИЧЕСКИЕ ИЗДАНИЯ</router-link
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#">ДОКУМЕНТЫ</a>
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ</a
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >СТП 04-2011 КУРСОВЫЕ РАБОТЫ</a
              >
            </li>
          </ul>
        </li>
        <li class="list-menu__link">
          <a
            class="list-menu__item"
            href="https://www.gsu.by/ru/quality-management-system"
            target="_blank"
            >МЕНЕДЖМЕНТ КАЧЕСТВА</a
          >
        </li>
        <li class="list-menu__link list-menu__link--dropdown">
          <a class="list-menu__item" href="#"
            >МЕТРОЛОГИЧЕСКОЕ ОБЕСПЕЧЕНИЕ <span class="list-menu__arrow"></span
          ></a>
          <ul class="list-submenu">
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#">ГРАФИКИ ПОВЕРКИ СИ</a>
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >ОБРАЗЕЦ АКТА МЕТРОЛОГИЧЕСКОГО ОБЕСПЕЧЕНИЯ НИР</a
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >ОБРАЗЕЦ СПИСКА УЧЕБНОГО (НАУЧНОГО) ОБОРУДОВАНИЯ (СРЕДСТВ
                ИЗМЕРЕНИЯ)</a
              >
            </li>
          </ul>
        </li>
        <li class="list-menu__link list-menu__link--dropdown">
          <a class="list-menu__item" href="#"
            >ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ <span class="list-menu__arrow"></span
          ></a>
          <ul class="list-submenu">
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</a
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#">ОБРАЗЕЦ РЕЕСТРА ПДн</a>
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >ЗАКОН РЕСПУБЛИКИ БЕЛАРУСЬ ОТ 07.05.2021 №99-З “О ЗАЩИТЕ
                ПЕРСОНАЛЬНЫХ ДАННЫХ”</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div @click="$emit('handlerClose')" class="list-close">
      <img src="../assets/img/close.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openDropdown(e) {
      e.preventDefault();
      let coll = Array.from(
        document.querySelectorAll(".list-menu__link--dropdown")
      );
      let arrows = Array.from(document.querySelectorAll(".list-menu__arrow"));
      if (
        (e.target.classList.contains("list-menu__item") ||
          e.target.classList.contains("list-menu__arrow")) &&
        e.target.closest(".list-menu__link--dropdown")
      ) {
        let parent = e.target.closest(".list-menu__link");
        let arrow = parent.querySelector(".list-menu__arrow");
        if (parent.classList.contains("open")) {
          parent.classList.remove("open");
          arrow.classList.remove("active");
        } else {
          coll.forEach((item) => item.classList.remove("open"));
          arrows.forEach((item) => item.classList.remove("active"));
          parent.classList.add("open");
          arrow.classList.add("active");
        }
      }
    },
  },
  props: {
    styles: {
      type: String,
      require: true,
      default: "",
      validator(value) {
        return ["open", ""].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  transition: left 0.2s ease;
  position: fixed;
  z-index: 5;
  left: -200%;
  top: 70px;
  height: calc(100% - 70px);
  background-color: #41648f;
  padding: 80px 45px 30px 30px;
  box-sizing: border-box;
  max-width: 390px;
  overflow: auto;
  &__wrapp {
    height: 400px;
  }
  &-menu {
    padding-bottom: 20px;
    box-sizing: border-box;
    & *:not(:last-child) {
      margin-bottom: 25px;
    }
    &__item {
      font-size: 20px;
      line-height: 27px;
      letter-spacing: 0.03em;
      color: #fff;
      font-family: "Open-Sans", sans-serif;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
    &__arrow {
      width: 0;
      height: 0;
      border-top: 12px solid #fff;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      margin-left: 10px;
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  &-submenu {
    margin-left: 28px;
    display: none;
    &__link {
      list-style-type: disc;
      color: #fff;
    }
    &__item {
      color: #fff;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-family: "Open-Sans", sans-serif;
    }
  }
  &-close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    & img {
      max-width: 100%;
      display: block;
    }
  }
  &.open {
    left: 0;
    transition: left 0.2s ease;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
  }
}
.list-menu__link.open .list-submenu {
  display: block;
}
</style>
