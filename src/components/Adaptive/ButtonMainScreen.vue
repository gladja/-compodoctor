<template>
    <a
        v-smooth-scroll
        v-if="show"
        id="know-more"
        href="#our-contacts"
        class="more-btn-mob"
    >
      <span class="more-btn-text">Зв'язатись з нами</span>
    </a>
    <a
        v-smooth-scroll
        v-else id="know-more"
        href="#our-contacts"
        class="more-btn-mob"
    >
      <span class="more-btn-text">Связаться с нами</span>
    </a>
</template>

<script>
export default {
  name: "ButtonMainScreen",
  props: ['show'],
}
</script>

<style>
.more-btn-mob {
  display: none;
  text-align: center;
  margin-top: 4vh;
  margin-bottom: 13vh;
  padding: 10px 40px;
  border-radius: 15px;
  background-color: rgba(255, 0, 0, 0.55);
  text-decoration: none;
}

.more-btn-mob:hover,
.more-btn-mob:active,
.more-btn-mob:focus {
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.6);
  transition: 0.2s ease-out;
}

</style>