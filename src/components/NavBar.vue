<template>
  <div class="nav-bg">
    <div class="container">
      <div class="header-row">
        <div id="menu" class="menu">
          <ul v-if="show" class="menu-category">
            <li class="menu-first"><a v-smooth-scroll href="#services">Послуги</a></li>
            <li><a v-smooth-scroll href="#computer-price">Цiни</a></li>
            <li><a v-smooth-scroll href="#about-us">Про нас</a></li>
            <li><a v-smooth-scroll href="#our-contacts">Контакти</a></li>
          </ul>
          <ul v-else class="menu-category">
            <li class="menu-first"><a v-smooth-scroll href="#services">Услуги</a></li>
            <li><a v-smooth-scroll href="#computer-price">Цены</a></li>
            <li><a v-smooth-scroll href="#about-us">О нас</a></li>
            <li><a v-smooth-scroll href="#our-contacts">Контакты</a></li>
          </ul>
        </div>
        <div class="btn-language">
          <button v-on:click="changeLng" v-if="show">RU</button>
          <button v-on:click="changeLng" v-else>UA</button>
        </div>
      </div>
      <!--			<div class="menu-mobile" style="display: none;">-->
      <!--				<ul>-->
      <!--					<li><a href="#services">Услуги</a></li>-->
      <!--					<li><a class="menu-prices" href="#computer-price">Цены</a></li>-->
      <!--					<li><a class="menu-about-us" href="#about-us">О нас</a></li>-->
      <!--					<li><a href="#our-contacts">Контакты</a></li>-->
      <!--				</ul>-->
      <!--			</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ['show'],
  data() {
    return {}
  },
  methods: {
    changeLng() {
      this.$emit('changeLng', this.show)
    }
  },
}
</script>

<style>
.header-row {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: grey;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-category {
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  flex-flow: row nowrap;
  padding: 0;
  width: 550px;
}

.menu-category li {
  margin-left: 80px;
  list-style: none;
}

.menu-category .menu-first {
  margin-left: 0;
}

.menu-category a {
  color: #ffffff;
  text-decoration: none;
}

.menu-category a:hover,
.menu-category a:active,
.menu-category a:focus {
  text-decoration: none;
  border-bottom: 2px solid rgba(187, 9, 11, 0.9);
  transition-delay: 0.1s;
}

.btn-language {
  padding-left: 150px;
}

.btn-language button {
  font-size: 18px;
  border: 1px solid #a60000;
  border-radius: 15px;
  width: 60px;
  height: 40px;
  cursor: pointer;
  background-color: #a60000;
  color: #ffffff;
  opacity: 0.8;
}

.btn-language button:hover {
  border: 0;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.6);
  transition: 0.2s ease-out;
}
</style>