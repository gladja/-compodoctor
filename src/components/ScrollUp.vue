<template>
  <div class="scroll">
    <a v-smooth-scroll v-show="scY > 80" class="animated" href="#app">
      <!--        <img class="animated" src="@/assets/img/footer/go-top-icon.png">-->
    </a>
  </div>
</template>

<script>
export default {
  name: "ScrollUp",
  data() {
    return {
      scY: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 200);
    },
  }
}
</script>

<style>
.scroll a {
  position: fixed;
  bottom: 1%;
  right: 1%;
  /*transition: 1s;*/
}

a.animated {
  background: url('@/assets/img/footer/go-top-icon.png') no-repeat;
  width: 55px;
  height: 55px;

  /*-webkit-transition: -webkit-transform .8s ease-in-out;*/
  /*transition:         transform .8s ease-in-out;*/

}

a.animated:hover {
  /*background: url('@/assets/img/footer/go-top-hover.png') no-repeat;*/

  /*opacity: 0.3;*/

  -webkit-filter: drop-shadow(0 2px 8px #000000);
  filter: drop-shadow(5px 5px 5px #444);
  color: rgba(0, 0, 0, 0);

  /*-webkit-transform: rotate(360deg);*/
  /*transform: rotate(360deg);*/
}
</style>