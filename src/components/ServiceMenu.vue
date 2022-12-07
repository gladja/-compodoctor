<template>
  <section class="services" id="services">
    <div class="container">
      <div class="text-center">
        <div v-if="show" class="section-header ">Наші послуги</div>
        <div v-else class="section-header ">Наши услуги</div>
        <p v-if="show" class="section-desc">Що ми вміємо</p>
        <p v-else class="section-desc">Что мы умеем</p>

      </div>
      <div class="services-wrap">
        <div v-for="service in services" :key="service.id" class="services-box">
          <img class="img-fluid services-box-img" :src="require('../assets/img/services/' + service.img)"
               alt="Компьютерные услуги">
          <h3 v-if="show" class="services-box-desc">{{ service.nameUa }}</h3>
          <h3 v-else class="services-box-desc">{{ service.nameRu }}</h3>
          <a v-if="show" v-smooth-scroll class="services-box-btn" :href="service.url">Цiни</a>
          <a v-else v-smooth-scroll class="services-box-btn" :href="service.url">Цены</a>
        </div>
      </div>

      <!--adaptive from 600px-->
      <ServiceMenuMobile :show="show"/>
    </div>
  </section>
</template>

<script>
import ServiceMenuMobile from "@/components/Adaptive/ServiceMenuMobile.vue";

export default {
  name: "ServicesMenu",
  components: {ServiceMenuMobile},
  props: ['show'],
  data() {
    return {
      services: [
        {
          id: 1,
          nameUa: 'Комп\'ютерні послуги',
          nameRu: 'Компьютерные услуги',
          img: '1.svg',
          url: '#computer-price',
        },
        {
          id: 2,
          nameUa: 'Абонентське обслуговування',
          nameRu: 'Абонентское обслуживание',
          img: '2.svg',
          url: '#abonent-price',
        },
        {
          id: 3,
          nameUa: 'Ремонт мобільної техніки',
          nameRu: 'Ремонт мобильной техники',
          img: '3.svg',
          url: '#mobile-price',
        },
        {
          id: 4,
          nameUa: 'Заправка та ремонт принтерів',
          nameRu: 'Заправка и ремонт принтеров',
          img: '4.svg',
          url: '#printers-price',
        },
        {
          id: 5,
          nameUa: 'Дротові та бездротові локальні мережі',
          nameRu: 'Проводные и беспроводные локальные сети',
          img: '5.svg',
          url: '#network-price',
        },
      ],
    }
  },
}
</script>

<style>
.services {
  padding-top: 80px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}

.text-center {
  text-align: center;
}

.services-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.services .section-header {
  color: #2c2c2c;
  font-family: "Trebuchet MS", serif;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 21px;
}

.services .section-desc {
  color: #4c4c4c;
  font-family: "Trebuchet MS", serif;
  font-size: 20px;
  font-weight: 400;
  color: #b83333;
  margin-bottom: 57px;
}

.services-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20%;
}

.services-box a:hover,
.services-box a:active,
.services-box a:focus {
  text-decoration: none;
  background-color: rgba(125, 125, 125, 0.7);
  transition: 0.2s ease-out;
}

.services-box-img {
  align-self: flex-end;
  display: block;
  max-height: 131px;
  margin: 0 auto;
}

.services-box-desc {
  height: 35px;
  align-self: flex-end;
  display: block;
  width: 100%;
  font-family: "Trebuchet MS", serif;
  font-size: 17px;
  font-weight: 400;
  margin-top: 30px;
}

.services-box-btn {
  margin-top: 35px;
  margin-bottom: 100px;
  align-self: center;
  width: 131px;
  padding: 10px 0;
  color: #ffffff;
  font-family: "Trebuchet MS", serif;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 15px;
  background-color: #a60000;
  opacity: 0.8;
  text-decoration: none;
}
</style>