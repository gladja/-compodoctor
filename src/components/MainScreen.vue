<template>
  <div class="container">
    <div class="main-screen">
      <div class="main-text">
        <h1 class="main-name">
          <img class="img-fluid main-logo-img" src="../assets/img/main-header-logo.svg"
               alt="Ремонт компьютеров, ноутбуков, телефонов, планшетов, принтеров.">
        </h1>
        <div v-if="show" class="slogan">З нами ти можеш забути о проблемах з електронікою</div>
        <div v-else class="slogan">С нами ты можешь забыть о проблемах с электроникой</div>
        <div class="wrapper-slider">
          <div class="slider" :style="{ 'margin-left': '-' + (96 * currentSliderIndex) + '%'}">
            <div v-for="item in sliderSlogan" :key="item.id">
            <h2 v-if="show" class="slider__item">{{ item.textUa }}</h2>
            <h2 v-else class="slider__item">{{ item.textRu }}</h2>
            </div>
          </div>
          <!--						<button @click="nextSlide">click</button>-->
        </div>
      </div>
      <a v-if="show" id="know-more" href="#about-us" class="more-btn"><span class="more-btn-text">Дізнатись більше</span></a>
      <a v-else id="know-more" href="#about-us" class="more-btn"><span
          class="more-btn-text">Узнать больше</span></a>
    </div>

  </div>
</template>

<script>
export default {
  name: "MainScreen",
  props: ['show'],
  data() {
    return {
      currentSliderIndex: 0,
      interval: 3000,
      sliderSlogan: [
        {
          id: 1,
          textUa: 'Ремонт комп\'ютерів',
          textRu: 'Ремонт компьютеров',
        },
        {
          id: 2,
          textUa: 'Ремонт ноутбуків',
          textRu: 'Ремонт ноутбуков',
        },
        {
          id: 3,
          textUa: 'Ремонт телефонів',
          textRu: 'Ремонт телефонов',
        },
        {
          id: 4,
          textUa: 'Ремонт принтерів',
          textRu: 'Ремонт принтеров',
        },
        {
          id: 5,
          textUa: 'Заправка картриджів',
          textRu: 'Заправка картриджей',
        },
        {
          id: 6,
          textUa: 'Ми завжди поруч',
          textRu: 'Мы всегда рядом',
        },
      ],
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSliderIndex >= this.sliderSlogan.length -1) {
        this.currentSliderIndex = 0
      } else {
        this.currentSliderIndex++
      }
    }
  },

  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval( function () {
        vm.nextSlide()
      }, vm.interval)
    }
  },
}
</script>

<style>
.main-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-screen .main-text {
  text-align: center;
  margin-top: 26vh;
}

.main-screen .main-name {
  font-family: "DS Hiline", sans-serif;
  color: #ffffff;
}

.slogan {
  color: #cfcfcf;
  font-family: "Trebuchet MS", serif;
  font-size: 22px;
  font-weight: 400;
  margin-top: 3vh;
}

/*slider*/
.wrapper-slider {
  max-width: 300px;
  overflow: hidden;
  margin: 0 auto;
}

.slider {
  display: flex;
  transition: all ease .5s;
  margin-left: -100%;

}

.slider__item {
  color: #cfcfcf;
  font-family: "Trebuchet MS", serif;
  font-size: 22px;
  font-weight: 400;
  margin-top: 4vh;
  min-width: 250px;
  padding: 0 20px;
}

.more-btn {
  text-align: center;
  margin-top: 4vh;
  margin-bottom: 13vh;
  padding: 10px 40px;
  border-radius: 15px;
  background-color: rgba(255, 0, 0, 0.55);
  text-decoration: none;
}

.more-btn:hover,
.more-btn:active,
.more-btn:focus {
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.6);
  transition: 0.2s ease-out;
}

.more-btn span {
  color: #ffffff;
  font-family: "Trebuchet MS", serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
}
</style>