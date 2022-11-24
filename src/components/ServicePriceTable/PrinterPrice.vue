<template>
  <section class="computer-price" id="printers-price">
    <div class="container">
      <div class="computer-price-wrap">
        <h4 v-if="show" class="computer-price-header">Ціни на заправку та ремонт принтерів</h4>
        <h4 v-else class="computer-price-header">Цены на заправку и ремонт принтеров</h4>
        <img class="img-fluid computer-price-header-img"
             src="@/assets/img/services/printer-price/printer-price-icon.svg"
             alt="computer price">
      </div>

      <table class="computer-price-table table-hover table table-striped">
        <thead>
        <!--		<th>Наименование</th>-->
        <!--		<th>Цена</th>-->
        </thead>
        <tbody>
        <tr class="table-line"
            :class="{'highlighted__line':item.highlightedLine}"
            v-for="item in pc"
            :key="item.id"
        >
          <td v-if="show" class="colum__one">{{ item.nameUa }}</td>
          <td v-else class="colum__one">{{ item.nameRu }}</td>

          <td v-if="show" class="colum__two">{{ item.priceUa }}</td>
          <td v-else class="colum__two">{{ item.priceRU }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "PrinterPrice",
  props: ['show'],
  data() {
    return {
      pc: [
        {
          id: 1,
          nameUa: 'Заправлення струменевого принтера',
          nameRu: 'Заправка струйного принтера',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: true,
        },
        {
          id: 2,
          nameUa: 'Заправлення лазерного принтера',
          nameRu: 'Заправка лазерного принтера',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: false,
        },
        {
          id: 3,
          nameUa: 'Ремонт картриджа принтера',
          nameRu: 'Ремонт картриджа принтера',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: true,
        },
        {
          id: 4,
          nameUa: 'Скидання, заміна відстійника (памперса) принтера',
          nameRu: 'Сброс, замена отстойника (памперса) принтера',
          priceUa: '500.00 грн.',
          priceRU: '500.00 грн.',
          highlightedLine: false,
        },
        {
          id: 5,
          nameUa: 'Встановлення СНПЧ',
          nameRu: 'Установка СНПЧ',
          priceUa: 'від 400.00 грн.',
          priceRU: 'от 400.00 грн.',
          highlightedLine: true,
        },
        {
          id: 6,
          nameUa: 'Ремонт принтера',
          nameRu: 'Ремонт принтера',
          priceUa: 'від 300.00 грн.',
          priceRU: 'от 300.00 грн.',
          highlightedLine: false,
        },
      ],
    }
  }
}
</script>

<style>
/*style for ComputerPrice*/
</style>