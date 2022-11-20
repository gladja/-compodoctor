<template>
  <div id="app">
    <div>
      <div id="header" class="main-header">
        <NavBar
            :show="show"
            @changeLng="changeLngNavBar"
        />
        <MainScreen :show="show"/>
      </div>
      <ServiceMenu :show="show"/>
      <ServicePrice :show="show"/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainScreen from "@/components/MainScreen";
import ServiceMenu from "@/components/ServiceMenu";
import ServicePrice from "@/components/ServicePrice";

export default {
  name: 'App',
  components: {
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
  box-sizing: border-boxc;
}

body {
  margin: 0;
  font-family: "Trebuchet MS", sans-serif;

}

/*menu*/
.main-header {
  height: 100vh;
  width: 100%;
  background: url(./assets/img/main-bg.jpg) no-repeat center center;
  background-size: cover;
}
</style>
