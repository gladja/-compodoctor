<template>
  <div id="app">
    <div id="header" class="main-header">
      <NavBar :show="show"/>
      <MainScreen :show="show"/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainScreen from "@/components/MainScreen";


export default {
  name: 'App',
  components: {
    MainScreen,
    NavBar
  },
  data() {
    return {
      show: true,
    }
  }

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
