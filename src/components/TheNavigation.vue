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
          <div class="list-menu__item"
            >СТАНДАРТИЗАЦИЯ <span class="list-menu__arrow"></span
          ></div>
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
              <a href="https://drive.google.com/file/d/1avO2sDitY7aEGpYXYA3gVNZolEEIIfga/preview" target="_blank" class="list-submenu__item"
                >СТП 05-2011 ДИПЛОМНЫЕ РАБОТЫ</a
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="https://drive.google.com/file/d/1jJqlo5SossLtExTI6xkYjrpnGq5WE0m-/preview" target="_blank"
                >СТП 04-2011 КУРСОВЫЕ РАБОТЫ</a
              >
            </li>
          </ul>
        </li>
        <li class="list-menu__link list-menu__link--dropdown">
          <div
            class="list-menu__item"
            >МЕНЕДЖМЕНТ КАЧЕСТВА <span class="list-menu__arrow"></span
            ></div>
            <ul class="list-submenu">
              <li class="list-submenu__link">
                <a class="list-submenu__item" href="https://drive.google.com/file/d/19j8zVizUB-pfnl1-WWhzLUNHDx2eo4oC/preview" target="_blank">О СМК университета</a>
              </li>
              <li class="list-submenu__link">
                <a class="list-submenu__item" href="https://www.gsu.by/node/2181" target="_blank"
                  >Документы СМК университета</a
                >
              </li>
              <li class="list-submenu__link">
                <a class="list-submenu__item" href="https://drive.google.com/file/d/1yHR4O8bCTCce90pb7tanwpdVqvpwSodo/preview" target="_blank"
                  >Анкетирование. Удовлетворенность потребителей </a
                >
              </li>
              <li class="list-submenu__link">
                <a class="list-submenu__item" href="https://drive.google.com/file/d/13DsYpjAryZg9gBX6N0Ae3zwjSQzW6FYS/preview" target="_blank"
                  > сертификация СМК</a
                >
              </li>
          </ul>
        </li>
        <li class="list-menu__link list-menu__link--dropdown">
          <div class="list-menu__item"
            >МЕТРОЛОГИЧЕСКОЕ ОБЕСПЕЧЕНИЕ <span class="list-menu__arrow"></span
          ></div>
          <ul class="list-submenu">
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#">нормативные документы</a>
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >перечень СИ ГГУ</a
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >Метрологические  оценки СИ</a
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >метрологические проработки НИР</a
              >
            </li>
          </ul>
        </li>
        <li class="list-menu__link list-menu__link--dropdown">
          <div class="list-menu__item"
            >ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ <span class="list-menu__arrow"></span
          ></div>
          <ul class="list-submenu">
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >Национальное регулирование</a
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#">Локальные НПА</a>
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >Информационная безопасность</a
              >
            </li>
            <li class="list-submenu__link">
              <a class="list-submenu__item" href="#"
                >Внутренний контроль</a
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
      let coll = Array.from(document.querySelectorAll(".list-menu__link--dropdown"));
      let arrows = Array.from(document.querySelectorAll(".list-menu__arrow"));
      if ((e.target.classList.contains("list-menu__item") || e.target.classList.contains("list-menu__arrow")) && e.target.closest(".list-menu__link--dropdown")){
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
      } else {
        if(!(e.target.classList.contains('list-menu') || e.target.classList.contains('list-menu__link--dropdown'))){
          this.$emit('handlerClose')
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
      cursor: pointer;
      line-height: 27px;
      letter-spacing: 0.03em;
      color: #fff;
      font-family: "Open-Sans", sans-serif;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      user-select:none;
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
