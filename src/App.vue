<template>
  <div id="app">
    <div class="wrapper">
      <div id="header" class="main-header">
        <NavBar
            :show="show"
            @changeLng="changeLngNavBar"
        />
        <ScrollUp/>
        <MainScreen :show="show"/>
      </div>
      <ServiceMenu :show="show"/>
      <ServicePrice :show="show"/>
      <AboutUs :show="show"/>
      <OurContacts :show="show"/>
      <FooterEnd :show="show"/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainScreen from "@/components/MainScreen";
import ServiceMenu from "@/components/ServiceMenu";
import ServicePrice from "@/components/ServicePrice";
import ScrollUp from "@/components/ScrollUp";
import AboutUs from "@/components/AboutUs";
import OurContacts from "@/components/OurContacts";
import FooterEnd from "@/components/FooterEnd";

export default {
  name: 'App',
  components: {
    FooterEnd,
    OurContacts,
    AboutUs,
    ScrollUp,
    ServicePrice,
    ServiceMenu,
    MainScreen,
    NavBar,
  },

  data() {
    return {
      show: true,
    }
  },

  methods: {
    changeLngNavBar() {
      let show = this.show;
      this.show = !show;
      // console.log(show);
    }
  },

}
</script>

<style>
* {
  /*box-sizing: border-boxc;*/
  /*scroll-behavior: smooth;*/
}


body {
  margin: 0 auto;
  font-family: "Trebuchet MS", sans-serif;
}

/*menu*/
.main-header {
  height: 100vh;
  width: 100%;
  background: url(./assets/img/main-bg.jpg) no-repeat center center;
  background-size: cover;
}

/*media*/
@media (max-width: 1200px) {
  /*service menu*/
  .services-wrap {
    max-width: 900px;
  }

  .colum__one {
    width: 750px;
  }

  /*about us*/
  .about-us-content-wrap {
    max-width: 950px;
  }

  /*our contacts*/
  .contacts-wrap {
    max-width: 950px;
    font-size: 16px;
  }

  .contacts-wrap-text {
    width: 160px;
  }

  /*footer*/
  .footer-wrapper {
    max-width: 950px;
  }

  .footer-social {
    padding-right: 25px;
  }
}

@media (max-width: 1100px) {
  /*service menu*/
  .services-wrap {
    max-width: 800px;
  }

  .services-box-desc {
    font-size: 15px;
  }

  /*table price*/
  .computer-price-header {
    font-size: 30px;
  }

  .colum__one {
    width: 650px;
  }

  /*about us*/
  .about-us-content-wrap {
    max-width: 850px;
  }

  /*our contacts*/
  .contacts-wrap {
    max-width: 850px;
    font-size: 15px;
  }

  .contacts-wrap-text {
    width: 150px;
  }

  .img-fluid-icon {
    height: 70px;
  }

  /*footer*/
  .footer-wrapper {
    max-width: 850px;
  }

  .footer-social {
    padding-right: 10px;
  }
}

@media (max-width: 1000px) {
  /*service menu*/
  .services-wrap {
    max-width: 750px;
  }

  /*table price*/
  .colum__one {
    width: 550px;
  }

  /*about us*/
  .about-us-content-wrap {
    max-width: 750px;
  }

  /*our contacts*/
  .contacts-wrap {
    max-width: 750px;
    align-items: baseline;
    font-size: 16px;
  }

  .contacts-wrap-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contacts-wrap div span {
    margin: 0 auto;
  }

  /*footer*/
  .footer-wrapper {
    max-width: 750px;
  }

  .footer-social {
    padding-right: 15px;
  }
}

@media (max-width: 900px) {
  /*nav bar*/
  .btn-language {
    padding-left: 80px;
  }

  /*main screen*/
  .main-logo-img {
    height: 50px;
  }

  .more-btn-text {
    font-size: 18px;
  }

  /*service menu*/
  .services-wrap {
    max-width: 600px;
  }

  .services-box-img {
    max-height: 100px;
  }

  .services-box-btn {
    width: 100px;
  }

  /*table price*/
  .computer-price-header {
    font-size: 25px;
  }

  .colum__one {
    width: 450px;
  }

  /*about us*/
  .about-us-content-wrap {
    max-width: 650px;
    flex-direction: column;
  }

  .about-us-img-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }

  .about-us-img-wrap img {
    max-height: 130px;
    margin: 15px 15px 0;
  }

  /*our contacts*/
  .contacts-wrap {
    max-width: 650px;
  }

  /*footer*/
  .footer-wrapper {
    max-width: 650px;
  }

}

@media (max-width: 800px) {
  /*nav bar*/
  .btn-language {
    padding-left: 0;
    position: absolute;
    top: 1%;
    right: 1.7%;
  }

  .menu-category {
    display: none;
  }

  .header-row {
    height: auto;
    /*transition: max-height 1s ease;*/


    align-items: baseline;
    justify-content: center;
  }

  .nav-burg {
    display: block;
  }

  /*.test {*/
  /*  transform: scaleY(0);*/
  /*  transform-origin: top;*/
  /*  transition: transform 0.26s ease;*/
  /*}*/

  /*main screen*/
  .main-logo-img {
    height: 40px;
  }

  .slogan {
    font-size: 20px;
  }

  .slider__item {
    font-size: 20px;
  }

  .more-btn-text {
    font-size: 16px;
  }

  /*service menu*/
  .services-wrap {
    flex-direction: column;
  }

  .services-box {
    max-width: 100%;
  }

  .services-box-img {
    max-height: 150px;
  }

  .services-box-btn {
    width: 130px;
    margin-top: 0;
    margin-bottom: 80px;
  }

  /*table price*/
  .computer-price-header {
    font-size: 18px;
  }

  .computer-price {
    font-size: 14px;
  }

  .colum__one {
    width: 320px;
  }

  .colum__two {
    width: 90px;
  }

  /*about us*/
  .about-us-content-wrap {
    max-width: 450px;
  }

  .about-us-img-wrap {
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .about-us-img-wrap img {
    margin: 35px 15px 0;
  }

  /*our contacts*/
  .contacts-wrap {
    max-width: 270px;
    flex-direction: column;
  }

  .contacts-wrap-item {
    flex-direction: row;
  }

  .contacts-wrap-text {
    text-align: end;
    padding-left: 30px;
  }

  .contacts-wrap div {
    justify-content: flex-end;
  }

  .contacts-wrap div span {
    margin: 0;
  }

  .img-fluid-icon {
    width: 70px;
  }

  /*footer*/
  .footer-wrapper {
    max-width: 450px;
  }

  @media (max-width: 600px) {
    /*scroll up*/
    .scroll {
      display: none;
    }

    /*nav bar*/
    .price {
      display: none;
    }

    .about {
      display: none;
    }

    /*main screen*/
    .main-logo-img {
      height: 25px;
    }

    .slogan {
      font-size: 13px;
    }

    .slider__item {
      font-size: 13px;
    }

    .more-btn {
      display: none;
    }

    .more-btn-mob {
      display: block;
    }

    /*service menu*/
    .services-wrap {
      max-width: 400px;
      flex-direction: column;
    }

    /*table price*/
    .computer-price {
      display: none;
    }

    /*about us*/
    .about-us {
      display: none;
    }

    /*footer*/
    .footer-wrapper {
      max-width: 280px;
    }
    .footer-logo img {
      width: 150px;
    }
  }
}
</style>
