<template>
  <div class="wrapper-sotrudniki">
    <div class="wrapper-sotrudniki__infa right_distance bottom_distance">
      <div class="wrapper-sotrudniki__infa__image">
        <img src="../assets/img/image1.jpg" />
      </div>
      <ul class="wrapper-sotrudniki__infa__text">
        <li class="dolznost">Начальник:</li>
        <li class="name">алешкевич николай александрович</li>
        <li class="kabinet">(к. 5, ауд. 3-6)</li>
      </ul>
    </div>
    <div class="wrapper-sotrudniki__infa bottom_distance">
      <div class="wrapper-sotrudniki__infa__image">
        <img src="../assets/img/image2.jpg" />
      </div>
      <ul class="wrapper-sotrudniki__infa__text">
        <li class="dolznost">Ведущий специалист:</li>
        <li class="name">матькунова Татьяна Владимировна</li>
        <li class="kabinet">(к. 5, ауд. 3-9)</li>
      </ul>
    </div>
    <div class="wrapper-sotrudniki__infa right_distance">
      <div class="wrapper-sotrudniki__infa__image">
        <img src="../assets/img/image4.jpg" />
      </div>
      <ul class="wrapper-sotrudniki__infa__text">
        <li class="dolznost">Ведущий специалист:</li>
        <li class="name">лосева Ольга Валентиновна</li>
        <li class="kabinet">(к. 5, ауд. 3-9)</li>
      </ul>
    </div>
    <div class="wrapper-sotrudniki__infa">
      <div class="wrapper-sotrudniki__infa__image">
        <img src="../assets/img/image3.jpg" />
      </div>
      <ul class="wrapper-sotrudniki__infa__text">
        <li class="dolznost">Ведущий инженер:</li>
        <li class="name">кравченко Владимир Владимирович</li>
        <li class="kabinet">(к. 5, ауд. 3-8)</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper-sotrudniki {
  width: 854px;
  margin: 0 auto;
  margin-bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  &__infa {
    width: 397px;
    height: 267px;
    display: flex;
    padding: 15px 0px 15px 15px;
    background: #ffffff;
    border: 1px solid #5c5c5c;
    box-sizing: border-box;
    &__image {
      width: 175px;
      height: 237px;
      margin-right: 15px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    &__text {
      width: 50%;
    }
  }
}
.right_distance {
  margin-right: 60px;
}
.bottom_distance {
  margin-bottom: 60px;
}
.dolznost {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #5f5f5f;
}
.name {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #040844;
  text-transform: uppercase;
  margin: 15px 0px;
}
.kabinet {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #333232;
}
@media screen and (max-width: 992px) {
  .wrapper-sotrudniki {
    width: 769px;
    padding: 0px 15px 0px 15px;
  }
  .wrapper-sotrudniki__infa {
    width: 354px;
  }
  .right_distance {
    margin-right: 30px;
  }
}
@media screen and (max-width: 768px) {
  .wrapper-sotrudniki {
    width: 397px;
    padding: 0px;
    margin: 0 auto;
  }
  .wrapper-sotrudniki__infa {
    width: 100%;
    margin-bottom: 60px;
  }
  .right_distance {
    margin-right: 0px;
  }
}
@media screen and (max-width: 425px) {
  .wrapper-sotrudniki {
    width: 310px;
  }
  .wrapper-sotrudniki__infa {
    height: auto;
    padding: 10px 1px 10px 10px;
    flex-direction: column;
    &__image {
      order: 2;
      margin: 0 auto;
    }
    &__text {
      order: 1;
      margin-bottom: 20px;
      width: 100%;
    }
  }
}
@media screen and (max-width: 320px) {
  .wrapper-sotrudniki {
    width: 270px;
  }
}
</style>
