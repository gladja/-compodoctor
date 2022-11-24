<template>
  <section class="computer-price" id="mobile-price">
    <div class="container">
      <div class="computer-price-wrap">
        <h4 v-if="show" class="computer-price-header">Ціни на ремонт мобільної техніки</h4>
        <h4 v-else class="computer-price-header">Цены на ремонт мобильной техники</h4>
        <img class="img-fluid computer-price-header-img"
             src="@/assets/img/services/mobile-price/mobile-price-icon.svg"
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
  name: "MobilePrice",
  props: ['show'],
  data() {
    return {
      pc: [
        {
          id: 1,
          nameUa: 'Налаштування пристрою',
          nameRu: 'Настройка устройства',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: true,
        },
        {
          id: 2,
          nameUa: 'Прошивка пристрою',
          nameRu: 'Прошивка устройства',
          priceUa: 'від 400.00 грн.',
          priceRU: 'от 400.00 грн.',
          highlightedLine: false,
        },
        {
          id: 3,
          nameUa: 'Заміна роз\'єму живлення пристрою',
          nameRu: 'Замена разъема питания устройства',
          priceUa: '300.00 грн.',
          priceRU: '300.00 грн.',
          highlightedLine: true,
        },
        {
          id: 4,
          nameUa: 'Заміна тачскрину, екрану пристрою (без урахування запчастини)',
          nameRu: 'Замена тачскрина, экрана устройства (без учета запчасти)',
          priceUa: 'від 300.00 грн.',
          priceRU: 'от 300.00 грн.',
          highlightedLine: false,
        },
        {
          id: 5,
          nameUa: 'Заміна батареї пристрою (без урахування запчастини)',
          nameRu: 'Замена батареи устройства (без учета запчасти)',
          priceUa: 'від 300.00 грн.',
          priceRU: 'от 300.00 грн.',
          highlightedLine: true,
        },
        {
          id: 6,
          nameUa: 'Чищення динаміка, мікрофона коли погано чути',
          nameRu: 'Чистка динамика, микрофона когда плохо слышно',
          priceUa: 'від 150.00 грн.',
          priceRU: 'от 150.00 грн.',
          highlightedLine: false,
        },
        {
          id: 7,
          nameUa: 'Ремонт пристрою',
          nameRu: 'Ремонт устройства',
          priceUa: 'від 400.00 грн.',
          priceRU: 'от 400.00 грн.',
          highlightedLine: true,
        },

      ],
    }
  }
}
</script>

<style>
/*style for ComputerPrice*/
</style>