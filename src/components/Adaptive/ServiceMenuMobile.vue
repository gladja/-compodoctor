<template>
  <div>
    <div class="services-wrap-mob">
      <div class="services-box">
        <img class="img-fluid services-box-img" src="@/assets/img/services/1.svg" alt="Компьютерные услуги">
        <h3 v-if="show" class="services-box-desc">Комп'ютерні послуги</h3>
        <h3 v-else class="services-box-desc">Компьютерные услуги</h3>
        <a v-if="show" class="services-box-btn" v-on:click="openPrice">Цiни</a>
        <a v-else class="services-box-btn" v-on:click="openPrice">Цены</a>

        <template v-if="table">
        <ComputerPrice :show="show"/>
        </template>

      </div>
<!--        <ComputerPrice :show="show" v-if="table"/>-->
    </div>

    <div class="services-wrap-mob">
      <div class="services-box">
        <img class="img-fluid services-box-img" src="@/assets/img/services/2.svg" alt="Компьютерные услуги">
        <h3 v-if="show" class="services-box-desc">Абонентське обслуговування</h3>
        <h3 v-else class="services-box-desc">Абонентское обслуживание</h3>
        <a v-if="show" class="services-box-btn" v-on:click="openPrice2">Цiни</a>
        <a v-else class="services-box-btn" v-on:click="openPrice2">Цены</a>
      </div>

      <template v-if="table2">
      <AbonentPrice :show="show"/>
      </template>

    </div>

  </div>
</template>

<script>
import ComputerPrice from "@/components/ServicePriceTable/ComputerPrice.vue";
import AbonentPrice from "@/components/ServicePriceTable/AbonentPrice";

export default {
  name: "ServiceMenuMobile",
  components: {AbonentPrice, ComputerPrice},
  props: ['show'],
  data() {
    return {
      table: false,
      table2: false,
    }
  },
  methods: {
    openPrice() {
      let table = this.table
      this.table = !table;
    },
    openPrice2() {
      let table2 = this.table2
      this.table2 = !table2;
    },
  }
}
</script>

<style>
.services-wrap-mob {
  display: none;
}
</style>