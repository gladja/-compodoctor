<template>
  <div>
    <div class="services-wrap-mob">
      <div class="services-box">
        <img class="img-fluid services-box-img" src="@/assets/img/services/1.svg" alt="Компьютерные услуги">
        <h3 v-if="show" class="services-box-desc">{{ services[0].nameUa }}</h3>
        <h3 v-else class="services-box-desc">{{ services[0].nameRu }}</h3>
        <a v-if="show" class="services-box-btn" v-on:click="openPrice">Цiни</a>
        <a v-else class="services-box-btn" v-on:click="openPrice">Цены</a>
      </div>

      <transition name="fade" appear>
        <ComputerPrice :show="show" v-if="table"/>
      </transition>

    </div>

    <div class="services-wrap-mob">
      <div class="services-box">
        <img class="img-fluid services-box-img" src="@/assets/img/services/2.svg" alt="Компьютерные услуги">
        <h3 v-if="show" class="services-box-desc">{{ services[1].nameUa }}</h3>
        <h3 v-else class="services-box-desc">{{ services[1].nameRu }}</h3>
        <a v-if="show" class="services-box-btn" v-on:click="openPrice2">Цiни</a>
        <a v-else class="services-box-btn" v-on:click="openPrice2">Цены</a>
      </div>

      <transition name="fade" appear>
        <AbonentPrice :show="show" v-if="table2"/>
      </transition>

    </div>

    <div class="services-wrap-mob">
      <div class="services-box">
        <img class="img-fluid services-box-img" src="@/assets/img/services/3.svg" alt="Компьютерные услуги">
        <h3 v-if="show" class="services-box-desc">{{ services[2].nameUa }}</h3>
        <h3 v-else class="services-box-desc">{{ services[2].nameRu }}</h3>
        <a v-if="show" class="services-box-btn" v-on:click="openPrice3">Цiни</a>
        <a v-else class="services-box-btn" v-on:click="openPrice3">Цены</a>
      </div>

      <transition name="fade" appear>
        <MobilePrice :show="show" v-if="table3"/>
      </transition>

    </div>

    <div class="services-wrap-mob">
      <div class="services-box">
        <img class="img-fluid services-box-img" src="@/assets/img/services/4.svg" alt="Компьютерные услуги">
        <h3 v-if="show" class="services-box-desc">{{ services[3].nameUa }}</h3>
        <h3 v-else class="services-box-desc">{{ services[3].nameRu }}</h3>
        <a v-if="show" class="services-box-btn" v-on:click="openPrice4">Цiни</a>
        <a v-else class="services-box-btn" v-on:click="openPrice4">Цены</a>
      </div>

      <transition name="fade" appear>
        <PrinterPrice :show="show" v-if="table4"/>
      </transition>

    </div>

    <div class="services-wrap-mob">
      <div class="services-box">
        <img class="img-fluid services-box-img" src="@/assets/img/services/5.svg" alt="Компьютерные услуги">
        <h3 v-if="show" class="services-box-desc">{{ services[4].nameUa }}</h3>
        <h3 v-else class="services-box-desc">{{ services[4].nameRu }}</h3>
        <a v-if="show" class="services-box-btn" v-on:click="openPrice5">Цiни</a>
        <a v-else class="services-box-btn" v-on:click="openPrice5">Цены</a>
      </div>

      <transition name="fade" appear>
        <NetworkPrice :show="show" v-if="table5"/>
      </transition>

    </div>

  </div>
</template>

<script>
import ComputerPrice from "@/components/ServicePriceTable/ComputerPrice.vue";
import AbonentPrice from "@/components/ServicePriceTable/AbonentPrice";
import MobilePrice from "@/components/ServicePriceTable/MobilePrice";
import PrinterPrice from "@/components/ServicePriceTable/PrinterPrice";
import NetworkPrice from "@/components/ServicePriceTable/NetworkPrice";

export default {
  name: "ServiceMenuMobile",
  components: {NetworkPrice, PrinterPrice, MobilePrice, AbonentPrice, ComputerPrice},
  props: ['show', 'services'],
  data() {
    return {
      table: false,
      table2: false,
      table3: false,
      table4: false,
      table5: false,
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
    openPrice3() {
      let table3 = this.table3
      this.table3 = !table3;
    },
    openPrice4() {
      let table4 = this.table4
      this.table4 = !table4;
    },
    openPrice5() {
      let table5 = this.table5
      this.table5 = !table5;
    },
  }
}
</script>

<style>
.services-wrap-mob {
  display: none;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.fade-enter-active {
  transition: all .5s ease;
}

.fade-leave-active {
  transition: all .3s ease;
  /*position: relative;*/
}

.fade-move {

}


</style>