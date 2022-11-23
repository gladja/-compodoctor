<template>
<div>
  <ComputerPrice :show="show"/>
  <AbonentPrice :show="show"/>
  <ComputerPrice :show="show"/>
</div>
</template>

<script>
import ComputerPrice from "@/components/ServicePriceTable/ComputerPrice";
import AbonentPrice from "@/components/ServicePriceTable/AbonentPrice";
export default {
  name: "ServicePrice",
  props: ['show'],
  components: {AbonentPrice, ComputerPrice}

}
</script>

<style>

</style>