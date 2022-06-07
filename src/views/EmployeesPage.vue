<template>
  <div class="block-page">
    <div class="block-emp">
      <Container :empoloyess='"container--emp"'>
        <div class="block-emp-body">
          <div class="block-emp-body__column">
            <div class="block-emp-body__item">
              <div class="block-emp-body__image">
                <div class="block-emp-body__img">
                  <img src="../assets/img/employees/01.jpg" alt="">
                </div>
              </div>
              <div class="block-emp-body__title">
                <span>Начальник:</span><span>АЛЕШКЕВИЧ Николай Александрович</span><span>(к. 5, ауд. 3-6)</span>
              </div>
            </div>
          </div>
          <div class="block-emp-body__column">
            <div class="block-emp-body__item">
              <div class="block-emp-body__image big-position">
                <div class="block-emp-body__img">
                  <img src="../assets/img/employees/02.jpg" alt="">
                </div>
              </div>
              <div class="block-emp-body__title">
                <span>Ведущий специалист:</span><span>МАТЬКУНОВА Татьяна Владимировна</span><span>(к. 5, ауд. 3-6)</span>
              </div>
            </div>
          </div>
          <div class="block-emp-body__column">
            <div class="block-emp-body__item">
              <div class="block-emp-body__image">
                <div class="block-emp-body__img">
                  <img src="../assets/img/employees/03.jpg" alt="">
                </div>
              </div>
              <div class="block-emp-body__title">
                <span>Ведущий специалист:</span><span>ЛОСЕВА Ольга Валентиновна</span><span>(к. 5, ауд. 3-6)</span>
              </div>
            </div>
          </div>
          <div class="block-emp-body__column">
            <div class="block-emp-body__item">
              <div class="block-emp-body__image">
                <div class="block-emp-body__img">
                  <img src="../assets/img/employees/04.jpg" alt="">
                </div>
              </div>
              <div class="block-emp-body__title">
                <span>Ведущий инженер:</span><span>КРАВЧЕНКО Владимир Владимирович</span><span>(к. 5)</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from "../components/Container.vue";

  export default {
    components:{
      Container
    }
  }
</script>

<style lang="scss" scoped>
.block-emp-body{
  display: flex;
  flex-wrap: wrap;
  margin: 0 -30px;
  &__column{
    flex: 0 1 50%;
    padding: 0 30px;
    box-sizing: border-box;
    &:not(:last-child){
      margin-bottom: 60px;
    }
  }
  &__item{
    display: flex;
    border: 1px solid #5C5C5C;
    padding: 15px;
    box-sizing: border-box;
  }
  &__image{
    flex: 0 1 65%;
    margin-right: 15px;
    &.big-position{
      & img{
        object-position: -60px;
      }
    }
  }
  &__img{
    position: relative;
    overflow: hidden;
    padding: 0 0 132% 0;
    & img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  &__title{
    font-weight: 700;
    font-size: 16px;
    color: #040844;
    flex: 0 1 243px;
    line-height: 19px;
    & span:first-child{
      color: #5F5F5F;
    }
    & span:last-child{
      color: #333232;
    }
    & span{
      display: block;
    }
    & *:not(:last-child){
      margin-bottom: 15px;
    }
  }
}
@media(max-width:700px){
  .block-emp-body__column{
    flex: 1 1 100%;
    &:not(:last-child){
      margin-bottom: 30px;
    }
  }
  .block-emp-body__image{
    flex: 0 1 34%;
  }
  .block-emp{
    padding-bottom: 30px;
  }
}
@media(max-width:375px){
  .block-emp-body__image{
    flex: 0 1 70%;
  }
}
</style>