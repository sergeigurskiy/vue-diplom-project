<template>
  <div class="list" :class="styles">
    <div class="list__wrapp">
      <ul class="list-menu">
        <Link 
          v-for="link in linksData"
          :key="link.title"
          :title="link.title"
          :to="link.to"
          classLink="list-menu__link"
          classItem="list-menu__item"
          :sublinks="link.sublinks"
          :linkId="link.id"
          @click.stop="openDrop(link.id)"
          :isOpenDrop="link.isOpenDrop"
        />
      </ul>
    </div>
    <div @click="$emit('handlerClose')" class="list-close">
      <img src="../../assets/img/close.svg" alt="" />
    </div>
  </div>
</template>

<script>
import Link from '../Navigations/Link.vue'
export default {
  components:{
    Link
  },
  methods:{
    openDrop(id){
      return this.$store.commit('openDropdown', {
        id
      })
    }
  },
  computed:{
    linksData(){
      return this.$store.getters.navigateData
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

<style lang="scss">
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
    &__link{
      &:not(:last-child) {
      padding-bottom: 25px;
    }
    }
    padding-bottom: 20px;
    box-sizing: border-box;
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
      &:not(:last-child){
        padding-bottom: 20px;
      }
      &:first-child{
        padding-top: 20px;
      }
    }
    &__item {
      color: #fff;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-family: "Open-Sans", sans-serif;
      cursor: pointer;
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
