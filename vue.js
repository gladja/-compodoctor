new Vue({
    el: '#app',
    data() {
        return {
            show: true,
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

            currentSliderIndex: 0,
            interval: 3000,
            sliderSlogan: [
                {
                    id: 1,
                    textUa: 'Ремонт комп\'ютерів',
                    textRu: 'Ремонт компьютеров',
                },
                {
                    id: 2,
                    textUa: 'Ремонт ноутбуків',
                    textRu: 'Ремонт ноутбуков',
                },
                {
                    id: 3,
                    textUa: 'Ремонт телефонів',
                    textRu: 'Ремонт телефонов',
                },
                {
                    id: 4,
                    textUa: 'Ремонт принтерів',
                    textRu: 'Ремонт принтеров',
                },
                {
                    id: 5,
                    textUa: 'Заправка картриджів',
                    textRu: 'Заправка картриджей',
                },
                {
                    id: 6,
                    textUa: 'Ми завжди поруч',
                    textRu: 'Мы всегда рядом',
                },
            ],

            services: [
                {
                    id: 1,
                    nameUa: 'Комп\'ютерні послуги',
                    nameRu: 'Компьютерные услуги',
                    img: '1.svg',
                    url: '#computer-price',
                },
                {
                    id: 2,
                    nameUa: 'Абонентське обслуговування',
                    nameRu: 'Абонентское обслуживание',
                    img: '2.svg',
                    url: '#abonent-price',
                },
                {
                    id: 3,
                    nameUa: 'Обслуговування мобільної техніки',
                    nameRu: 'Обслуживанее мобильной техники',
                    img: '3.svg',
                    url: '#mobile-price',
                },
                {
                    id: 4,
                    nameUa: 'Заправка та ремонт принтерів',
                    nameRu: 'Заправка и ремонт принтеров',
                    img: '4.svg',
                    url: '#printers-price',
                },
                {
                    id: 5,
                    nameUa: 'Дротові та бездротові локальні мережі',
                    nameRu: 'Проводные и беспроводные локальные сети',
                    img: '5.svg',
                    url: '#network-price',
                },
            ],
        }
    },

    methods: {
        nextSlide() {
            if (this.currentSliderIndex >= this.sliderSlogan.length -1) {
                this.currentSliderIndex = 0
            } else {
                this.currentSliderIndex++
            }
        }
    },

    mounted() {
        if (this.interval > 0) {
            let vm = this;
            setInterval( function () {
                vm.nextSlide()
            }, vm.interval)
        }
    },
})
