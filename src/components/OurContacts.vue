<template>
  <section class="our-contacts" id="our-contacts">
    <div class="wrapper">
      <div class="header-wrap">
        <h3 v-if="show" class="our-contacts-header">Наші контакти</h3>
        <h3 v-else class="our-contacts-header">Наши контакты</h3>
        <div v-if="show" class="our-contacts-desc">Ми завжди поруч</div>
        <div v-else class="our-contacts-desc">Мы всегда рядом</div>
<!--        <img class="our-contacts-header-img img-fluid" src="@/assets/img/contacts/phone-icon.png" alt="phone">-->
      </div>
    </div>
<!--    <hr class="line">-->
    <div class="container">
      <div class="contacts">
        <div class="contacts-wrap">
          <a class="map-link" href="https://goo.gl/maps/veC7tdv7szQ2" target="_blank">
            <div class="address">
              <img class="img-fluid" src="@/assets/img/contacts/map-icon.svg" alt="map">
              <span class="contacts-text">Ул. Смелянская 23<br>Черкассы<br>18000<br>Украина</span>
            </div>
          </a>
          <div class="e-mail">
            <img class="img-fluid" src="@/assets/img/contacts/e-mail-icon.svg" alt="e-mail">
            <span>info@pcdoc.ck.ua</span>
          </div>
          <div class="time-work">
            <img class="img-fluid-icon" src="@/assets/img/contacts/time-icon.svg" alt="home-phone">
            <span>пн-пт 10:00 - 18:30</span>
          </div>
          <div class="mobile-phone-nmb">
            <img class="img-fluid" src="@/assets/img/contacts/mobile-phone-number-icon.svg" alt="mobile-phone">
            <span>(093) 056-90-90<br>(097) 056-90-90</span>
          </div>
        </div>
      </div>
    </div>
<!--    <hr class="line">-->
  </section>
</template>

<script>
export default {
  name: "OurContacts",
  props: ['show'],
}
</script>

<style>
.our-contacts {
  margin-bottom: 40px;
}

.our-contacts .wrapper {
  display: flex;
  justify-content: center;
  margin: 0;
}

.our-contacts .header-wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 1110px;
  margin-top: 80px;
  margin-bottom: 40px;
}

.our-contacts-header {
  margin: 0 8px 0 0;
  color: #252525;
  font-size: 35px;
  font-weight: 400;
}

.our-contacts-desc {
  margin-top: 15px;
  color: #b83333;
  font-size: 18px;
}

.contacts-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #252525;
  font-size: 18px;
  font-weight: 400;
  line-height: 31.51px;
  max-width: 1050px;
  margin: 0 auto;
}

.contacts-wrap div {
  display: flex;
  align-items: center;
  margin-top: 13px;
}

.contacts-wrap div span {
  margin-left: 10px;
}

.contacts-text {
  text-decoration: none;
}

.line {
  background-color: #252525;
}

.img-fluid-icon {
  height: 80px;
}
</style>