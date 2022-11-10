// Vue.component ('v-table', {
//     data() {
//         return {
//             show: true,
//             pc: [
//                 {
//                     id: 1,
//                     nameRu: 'Вызов мастера в пределах города',
//                     nameUa: 'Виклик майстра',
//                     price: '50.00 грн.',
//                     highlightedLine: true,
//                 },
//                 {
//                     id: 2,
//                     nameRu: 'Транспортные услуги по перевозке ПК, в пределах города',
//                     price: '50.00 грн.',
//                     highlightedLine: false,
//                 },
//                 {
//                     id: 3,
//                     nameRu: 'Диагностика техники',
//                     price: 'от 50.00 грн.',
//                     highlightedLine: true,
//                 },
//                 {
//                     id: 4,
//                     nameRu: 'Чистка системного блока от пыли, замена термопасты, смазка кулеров',
//                     price: '200.00 грн.',
//                     highlightedLine: false,
//
//                 },
//                 {
//                     id: 5,
//                     nameRu: 'Чистка ноутбука от пыли, замена термопасты, смазка кулеров',
//                     price: 'от 300.00 грн.',
//                     highlightedLine: true,
//
//                 },
//                 {
//                     id: 6,
//                     nameRu: 'Установка операционной системы (ОС)',
//                     price: '250.00 грн.',
//                     highlightedLine: false,
//                 },
//                 {
//                     id: 7,
//                     nameRu: 'Базовый пакет программ',
//                     price: '250.00 грн.',
//                     highlightedLine: true,
//                 },
//             ]
//         }
//     }
// });

new Vue({
    el: '#app',
    data() {
        return {
            show: true,
            pc: [
                {
                    id: 1,
                    nameRu: 'Вызов мастера в пределах города',
                    nameUa: 'Виклик майстра',
                    price: '50.00 грн.',
                    highlightedLine: true,
                },
                {
                    id: 2,
                    nameRu: 'Транспортные услуги по перевозке ПК, в пределах города',
                    price: '50.00 грн.',
                    highlightedLine: false,
                },
                {
                    id: 3,
                    nameRu: 'Диагностика техники',
                    price: 'от 50.00 грн.',
                    highlightedLine: true,
                },
                {
                    id: 4,
                    nameRu: 'Чистка системного блока от пыли, замена термопасты, смазка кулеров',
                    price: '200.00 грн.',
                    highlightedLine: false,

                },
                {
                    id: 5,
                    nameRu: 'Чистка ноутбука от пыли, замена термопасты, смазка кулеров',
                    price: 'от 300.00 грн.',
                    highlightedLine: true,

                },
                {
                    id: 6,
                    nameRu: 'Установка операционной системы (ОС)',
                    price: '250.00 грн.',
                    highlightedLine: false,
                },
                {
                    id: 7,
                    nameRu: 'Базовый пакет программ',
                    price: '250.00 грн.',
                    highlightedLine: true,
                },
            ],
            sliderSlogan: [
                {
                    id: 1,
                    text: 'С нами ты можешь забыть о проблемах с электроникой',
                },
                {
                    id: 2,
                    text: 'Ремонт компьютеров',
                },
                {
                    id: 3,
                    text: 'Ремонт ноутбуков',
                },
            ]
        }
    },
})
