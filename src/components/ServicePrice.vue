<template>
<div class="service-price-wrap">
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
.computer-price {
  padding-top: 50px;
  padding-bottom: 50px;
  /*font-family: "Trebuchet MS", serif;*/
  font-size: 16px;
  font-weight: 400;
  box-shadow: 0 5px 8px -3px rgba(0, 0, 0, 0.35);
}

.computer-price-wrap {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.computer-price-header {
  margin: 0 17px 0 0;
  /*font-family: "Trebuchet MS", serif;*/
  font-size: 35px;
  font-weight: 400;
}

.computer-price-table {
  box-shadow: none;
  /*margin-top: 75px;*/
  border-collapse: collapse;
  margin: 0 auto;
}

.computer-price td {
  padding: 10px 10px;
}

.highlighted__line {
  background: #cccccc63;
}

.table-line:hover {
  background: #a60000;
  color: white;
  opacity: 0.8;
}

.colum__one {
  width: 850px;
  min-width: 200px;
}

.colum__two {
  width: 150px;
  min-width: 100px;
  text-align:  end;
}
</style>