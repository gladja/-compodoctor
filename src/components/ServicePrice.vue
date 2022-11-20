<template>
<div>
  <ComputerPrice :show="show"/>
</div>
</template>

<script>
import ComputerPrice from "@/components/ServicePriceTable/ComputerPrice";
export default {
  name: "ServicePrice",
  props: ['show'],
  components: {ComputerPrice}

}
</script>

<style>

</style>