<template>
  <section class="computer-price" id="computer-price">
    <div class="container">
      <div class="computer-price-wrap">
        <h4 v-if="show" class="computer-price-header">Ціни на комп'ютерні послуги</h4>
        <h4 v-else class="computer-price-header">Цены на компьютерные услуги</h4>
        <img class="img-fluid computer-price-header-img"
             src="img/services/computer-price/copmuter-price-icn.svg"
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

          <td class="colum__two">{{ item.price }}</td>
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
          price: '50.00 грн.',
          highlightedLine: true,
        },
        {
          id: 2,
          nameUa: 'Транспортні послуги з перевезення ПК у межах міста',
          nameRu: 'Транспортные услуги по перевозке ПК, в пределах города',
          price: '50.00 грн.',
          highlightedLine: false,
        },
        {
          id: 3,
          nameUa: 'Діагностика техніки',
          nameRu: 'Диагностика техники',
          price: 'от 50.00 грн.',
          highlightedLine: true,
        },
        {
          id: 4,
          nameUa: 'Чистка системного блоку від пилу, заміна термопасти, змазка кулеров',
          nameRu: 'Чистка системного блока от пыли, замена термопасты, смазка кулеров',
          price: '200.00 грн.',
          highlightedLine: false,

        },
        {
          id: 5,
          nameUa: 'Чистка ноутбука від пилу, заміна термопасти, змазка кулерів',
          nameRu: 'Чистка ноутбука от пыли, замена термопасты, смазка кулеров',
          price: 'от 300.00 грн.',
          highlightedLine: true,

        },
        {
          id: 6,
          nameUa: 'Установка операційної системи (ОС)',
          nameRu: 'Установка операционной системы (ОС)',
          price: '250.00 грн.',
          highlightedLine: false,
        },
        {
          id: 7,
          nameUa: 'Базовий пакет програм',
          nameRu: 'Базовый пакет программ',
          price: '250.00 грн.',
          highlightedLine: true,
        },
        {
          id: 8,
          nameUa: '',
          nameRu: 'Установка офисного пакета',
          price: '150.00 грн.',
          highlightedLine: false,
        },
      ],
    }
  }
}
</script>

<style>
.computer-price {
  padding-bottom: 50px;
  font-family: "Trebuchet MS", serif;
  font-size: 16px;
  font-weight: 400;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);*/
}

.computer-price-wrap {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  /*align-items: flex-end;*/

}

.computer-price-header {
  margin: 0 17px 0 0;
  font-family: "Trebuchet MS", serif;
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
  padding: 7px 5px;
}

.highlighted__line {
  background: #cccccc;
}

.table-line:hover {
  background: #a60000;
  color: white;
  opacity: 0.8;
}

.colum__one {
  width: 700px;
  min-width: 200px;
  padding: 5px 10px;
}

.colum__two {
    width: 130px;
    min-width: 100px;
    text-align:  end;
    padding: 5px 10px;
}
</style>