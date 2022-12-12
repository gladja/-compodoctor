<template>
  <div class="nav-burg">
    <div class="btn-menu">
      <button v-on:click="changeBurger">Меню</button>
    </div>
    <transition v-if="burger" name="menu" appear>
      <ul v-if="show" class="menu-category-burger">
        <li class="menu-first-bg serv"><a v-smooth-scroll href="#services">Послуги</a></li>
        <li class="menu-first-bg price"><a v-smooth-scroll href="#computer-price">Цiни</a></li>
        <li class="menu-first-bg about"><a v-smooth-scroll href="#about-us">Про нас</a></li>
        <li class="menu-first-bg cont"><a v-smooth-scroll href="#our-contacts">Контакти</a></li>
      </ul>

      <ul v-else class="menu-category-burger">
        <li class="menu-first-bg serv"><a v-smooth-scroll href="#services">Услуги</a></li>
        <li class="menu-first-bg price"><a v-smooth-scroll href="#computer-price">Цены</a></li>
        <li class="menu-first-bg about"><a v-smooth-scroll href="#about-us">О нас</a></li>
        <li class="menu-first-bg cont"><a v-smooth-scroll href="#our-contacts">Контакты</a></li>
      </ul>
    </transition>

  </div>

</template>

<script>
export default {
  name: "NavBarBurger",
  props: ['show'],
  data() {
    return {
      burger: false,
    }
  },
  methods: {
    changeBurger() {
      let burger = this.burger;
      this.burger = !burger;
    }
  }
}
</script>

<style>
.nav-burg {
  display: none;
  color: #ffffff;
  font-size: 18px;
  text-transform: uppercase;
}

.btn-menu button {
  font-size: 18px;
  text-transform: uppercase;
  border: 1px solid #a60000;
  border-radius: 15px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: #a60000;
  color: #ffffff;
  opacity: 0.8;
  margin: 10px 0;
}

.btn-menu button:hover {
  border: 0;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.6);
  transition: 0.2s ease-out;
}

.menu-category-burger {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  flex-flow: row nowrap;
  padding: 10px 0;
  /*width: 550px;*/
  list-style: none;
  text-align: center;
  /*transition: height 0.4s, opacity 0.5s;*/

}

.menu-category-burger a {
  text-decoration: none;
  color: #ffffff;
}

.menu-category-burger a:hover,
.menu-category-burger a:active,
.menu-category-burger a:focus {
  text-decoration: none;
  border-bottom: 2px solid rgba(187, 9, 11, 0.9);
  transition-delay: 0.1s;
}

.menu-first-bg {
  padding-bottom: 10px;
}

/*animated*/
.menu-enter, .menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.menu-enter-active {
  transition: all .4s ease;
}

.menu-leave-active {
  transition: all .2s ease;
}

.menu-move {
  /*transition: all 1.5s ease;*/
}

</style>