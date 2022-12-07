<template>
  <div>
    <div class="services-wrap-mob">
      <div class="services-box">
        <img class="img-fluid services-box-img" src="@/assets/img/services/1.svg" alt="Компьютерные услуги">
        <h3 v-if="show" class="services-box-desc">Комп'ютерні послуги</h3>
        <h3 v-else class="services-box-desc">Компьютерные услуги</h3>
        <a v-if="show" class="services-box-btn" href="#computer-price">Цiни</a>
        <a v-else class="services-box-btn" href="#computer-price">Цены</a>


      </div>
    <ComputerPrice :show="show"/>
    </div>
  </div>
</template>

<script>
import ComputerPrice from "@/components/ServicePriceTable/ComputerPrice.vue";

export default {
  name: "ServiceMenuMobile",
  components: {ComputerPrice},
  props: ['show'],
}
</script>

<style>
.services-wrap-mob {
  display: none;
}
</style>