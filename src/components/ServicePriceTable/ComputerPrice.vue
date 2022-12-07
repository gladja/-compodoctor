<template>
  <section class="computer-price" id="computer-price">
    <div class="container">
      <div class="computer-price-wrap">
        <h3 v-if="show" class="computer-price-header">Ціни на комп'ютерні послуги</h3>
        <h3 v-else class="computer-price-header">Цены на компьютерные услуги</h3>
        <img class="img-fluid computer-price-header-img"
             src="@/assets/img/services/computer-price/copmuter-price-icn.svg"
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
  name: "ComputerPrice",
  props: ['show'],
  data() {
    return {
      pc: [
        {
          id: 1,
          nameUa: 'Виклик майстра в межах міста',
          nameRu: 'Вызов мастера в пределах города',
          priceUa: '50.00 грн.',
          priceRU: '50.00 грн.',
          highlightedLine: true,
        },
        {
          id: 2,
          nameUa: 'Транспортні послуги з перевезення ПК у межах міста',
          nameRu: 'Транспортные услуги по перевозке ПК, в пределах города',
          priceUa: '50.00 грн.',
          priceRU: '50.00 грн.',
          highlightedLine: false,
        },
        {
          id: 3,
          nameUa: 'Діагностика техніки',
          nameRu: 'Диагностика техники',
          priceUa: '100.00 грн.',
          priceRU: '100.00 грн.',
          highlightedLine: true,
        },
        {
          id: 4,
          nameUa: 'Чистка системного блоку від пилу, заміна термопасти, змащування кулерів',
          nameRu: 'Чистка системного блока от пыли, замена термопасты, смазывание кулеров',
          priceUa: '200.00 грн.',
          priceRU: '200.00 грн.',
          highlightedLine: false,

        },
        {
          id: 5,
          nameUa: 'Чистка ноутбука від пилу, заміна термопасти, змащування кулерів',
          nameRu: 'Чистка ноутбука от пыли, замена термопасты, смазывание кулеров',
          priceUa: 'від 300.00 грн.',
          priceRU: 'от 300.00 грн.',
          highlightedLine: true,

        },
        {
          id: 6,
          nameUa: 'Встановлення операційної системи (ОС)',
          nameRu: 'Установка операционной системы (ОС)',
          priceUa: '250.00 грн.',
          priceRU: '250.00 грн.',
          highlightedLine: false,
        },
        {
          id: 7,
          nameUa: 'Встановлення базового набору програм',
          nameRu: 'Установка базового набора программ',
          priceUa: '250.00 грн.',
          priceRU: '250.00 грн.',
          highlightedLine: true,
        },
        {
          id: 8,
          nameUa: 'Встановлення офісного пакета',
          nameRu: 'Установка офисного пакета',
          priceUa: '150.00 грн.',
          priceRU: '150.00 грн.',
          highlightedLine: false,
        },
        {
          id: 9,
          nameUa: 'Встановлення антивірусної програми',
          nameRu: 'Установка антивирусной программы',
          priceUa: '100.00 грн.',
          priceRU: '100.00 грн.',
          highlightedLine: true,
        },
        {
          id: 10,
          nameUa: 'Встановлення додаткових програм',
          nameRu: 'Установка дополнительных программ',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: false,
        },
        {
          id: 11,
          nameUa: 'Усунення несправностей, налаштування ОС та ПЗ',
          nameRu: 'Устранение неполадок, настройка ОС и ПО',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: true,
        },
        {
          id: 12,
          nameUa: 'Видалення вірусів',
          nameRu: 'Удаление вирусов',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: false,
        },
        {
          id: 13,
          nameUa: 'Відновлення видалених файлів',
          nameRu: 'Восстановление удаленных файлов',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: true,
        },
        {
          id: 14,
          nameUa: 'Налаштування роутера',
          nameRu: 'Настройка роутера',
          priceUa: 'від 100.00 грн.',
          priceRU: 'от 100.00 грн.',
          highlightedLine: false,
        },
        {
          id: 15,
          nameUa: 'Ремонт комп\'ютерної техніки',
          nameRu: 'Ремонт компьютерной техники',
          priceUa: 'від 200.00 грн.',
          priceRU: 'от 200.00 грн.',
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