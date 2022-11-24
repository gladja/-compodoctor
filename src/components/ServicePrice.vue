<template>
<div>
  <ComputerPrice :show="show"/>
  <AbonentPrice :show="show"/>
  <MobilePrice :show="show"/>
  <PrinterPrice :show="show"/>
  <NetworkPrice :show="show"/>
</div>
</template>

<script>
import ComputerPrice from "@/components/ServicePriceTable/ComputerPrice";
import AbonentPrice from "@/components/ServicePriceTable/AbonentPrice";
import MobilePrice from "@/components/ServicePriceTable/MobilePrice";
import PrinterPrice from "@/components/ServicePriceTable/PrinterPrice";
import NetworkPrice from "@/components/ServicePriceTable/NetworkPrice";
export default {
  name: "ServicePrice",
  props: ['show'],
  components: {NetworkPrice, PrinterPrice, MobilePrice, AbonentPrice, ComputerPrice}

}
</script>

<style>

</style>