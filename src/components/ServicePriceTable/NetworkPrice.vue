<template>
  <section class="computer-price" id="network-price">
    <div class="container">
      <div class="computer-price-wrap">
        <h3 v-if="show" class="computer-price-header">Ціни на дротові та бездротові локальні мережі</h3>
        <h3 v-else class="computer-price-header">Цены на проводные и беспроводные локальные сети</h3>
        <img class="img-fluid computer-price-header-img"
             src="@/assets/img/services/network-price/network-price-icon.svg"
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
  name: "NetworkPrice",
  props: ['show'],
  data() {
    return {
      pc: [
        {
          id: 1,
          nameUa: 'Прокладка 1-го метра кабелю',
          nameRu: 'Прокладка 1-го метра кабеля',
          priceUa: 'від 10.00 грн.',
          priceRU: 'от 10.00 грн.',
          highlightedLine: true,
        },
        {
          id: 2,
          nameUa: 'Монтаж розетки (без урахування матеріалів)',
          nameRu: 'Монтаж розетки (без учета материалов)',
          priceUa: '100.00 грн.',
          priceRU: '100.00 грн.',
          highlightedLine: false,
        },
        {
          id: 3,
          nameUa: 'Обжим конекторів RJ-45',
          nameRu: 'Обжим коннекторов RJ-45',
          priceUa: '20.00 грн.',
          priceRU: '20.00 грн.',
          highlightedLine: true,
        },
        {
          id: 4,
          nameUa: 'Кросування Patch panel/Сross panel (кросування, обробка кабелю, жгутування) 1 порт',
          nameRu: 'Кроссирование Patch panel/Сross panel (кроссировка, разделка кабеля, жгутирование) 1 порт',
          priceUa: '30.00 грн.',
          priceRU: '30.00 грн.',
          highlightedLine: false,
        },
        {
          id: 5,
          nameUa: 'Монтаж та встановлення шафи/стійки',
          nameRu: 'Монтаж и установка шкафа/стойки',
          priceUa: 'від 800.00 грн.',
          priceRU: 'от 800.00 грн.',
          highlightedLine: true,
        },
        {
          id: 6,
          nameUa: 'Монтаж обладнання у шафу (патч-панель, активне обладнання)',
          nameRu: 'Монтаж оборудования в шкаф (патч-панель, активное оборудование)',
          priceUa: 'від 500.00 грн.',
          priceRU: 'от 500.00 грн.',
          highlightedLine: false,
        },
        {
          id: 7,
          nameUa: 'Діагностика мережного обладнання',
          nameRu: 'Диагностика сетевого оборудования',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: true,
        },

      ],
    }
  }
}
</script>

<style>
/*style for ServicePrice*/
</style>