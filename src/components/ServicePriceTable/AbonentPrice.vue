<template>
  <section class="computer-price" id="abonent-price">
    <div class="container">
      <div class="computer-price-wrap">
        <h3 v-if="show" class="computer-price-header">Ціни на абонентське обслуговування</h3>
        <h3 v-else class="computer-price-header">Цены на абонентское обслуживание</h3>
        <img class="img-fluid computer-price-header-img"
             src="@/assets/img/services/abonents-price/abonents-price-icon.svg"
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
  name: "AbonentPrice",
  props: ['show'],
  data() {
    return {
      pc: [
        {
          id: 1,
          nameUa: 'Обслуговування 1-го ПК на місяць',
          nameRu: 'Обслуживание 1-го ПК в месяц',
          priceUa: '150.00 грн.',
          priceRU: '150.00 грн.',
          highlightedLine: true,
        },
        {
          id: 2,
          nameUa: 'Обслуговування 2-х ПК на місяць',
          nameRu: 'Обслуживание 2-х ПК в месяц',
          priceUa: '250.00 грн.',
          priceRU: '250.00 грн.',
          highlightedLine: false,
        },
        {
          id: 3,
          nameUa: 'Обслуговування 3-х ПК на місяць',
          nameRu: 'Обслуживание 3-х ПК в месяц',
          priceUa: '350.00 грн.',
          priceRU: '350.00 грн.',
          highlightedLine: true,
        },
        {
          id: 4,
          nameUa: 'Обслуговування 4-х ПК на місяць',
          nameRu: 'Обслуживание 4-х ПК в месяц',
          priceUa: '450.00 грн.',
          priceRU: '450.00 грн.',
          highlightedLine: false,
        },
        {
          id: 5,
          nameUa: 'Обслуговування 1-го сервера на місяць',
          nameRu: 'Обслуживание 1-го сервера в месяц',
          priceUa: '500.00 грн.',
          priceRU: '500.00 грн.',
          highlightedLine: true,
        },
        {
          id: 6,
          nameUa: 'Обслуговування мережевого обладнання',
          nameRu: 'Обслуживание сетевого оборудования',
          priceUa: 'ціна договірна',
          priceRU: 'цена договорная',
          highlightedLine: false,
        },
        {
          id: 7,
          nameUa: 'Обслуговування друкуючого обладнання',
          nameRu: 'Обслуживание печатного оборудования',
          priceUa: 'ціна договірна',
          priceRU: 'цена договорная',
          highlightedLine: true,
        },
        {
          id: 8,
          nameUa: 'Віддалене налаштування комп\'ютера (AnyDesk, TeamViewer)',
          nameRu: 'Удаленная настройка компьютера (AnyDesk, TeamViewer)',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
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