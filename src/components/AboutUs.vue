<template>
  <section class="about-us" id="about-us">
    <div class="container">
      <div class="about-us-wrap">
        <h4 class="about-us-header">О нашей компании</h4>
        <p class="about-us-desc">Узнай все о нас</p>
      </div>
      <div class="about-us-content-wrap">
        <div class="about-us-text-wrap">
          <p>Компьютерная служба «КомпоДоктор» организована в 2008 году, но, несмотря на молодой возраст в ней
            работают люди, которые имеют большой опыт работы с компьютерной техникой. Компьютерная помощь
            сегодня -
            это одна
            из наиболее актуальных услуг в сфере информационных технологий. Мы постоянно работаем над улучшением
            качества
            обслуживания.
          </p>
          <p>
            Вы всегда можете рассчитывать на компьютерную помощь с гарантией качества и профессиональным
            обслуживанием. Высококвалифицированные специалисты в короткие сроки устраняют любые проблемы в
            работе
            персональных компьютеров, настраивают программное обеспечение, обучат работать с новыми программами,
            поделятся ценными советами. Кроме того, для Вас работает линия технической поддержки клиентов, где
            Вы
            можете получить бесплатную консультацию по устранению возникших неполадок, ремонту компьютеров,
            прикладному программному обеспечению, а также вызвать сервис-инженера. Мы ценим наших клиентов.
          </p>
          <h5>Наша миссия</h5>
          <p>
            Развивать рынок в области компьютерных услуг, добиваться совершенства во всём. Мы никогда не
            оставляем
            клиента один на один с проблемами и всегда оказываем реальную помощь в любых ситуациях. Мы полностью
            оправдываем наше название - «Компьютерный Доктор».
          </p>
          <h5>Наша филосифия</h5>
          <p>
            Мы работаем, прежде всего, с людьми, а не с компьютерами. Мы позволяем себе получать прибыль только
            после полного решения проблем клиента. Прибыль - следствие нашей работы.
          </p>
          <p>
            В своей деятельности мы прежде всего ориентируемся на Ваши потребности и поэтому с уверенностью
            можем
            сказать, что обратившись к нам Вы всегда можете рассчитывать на профессиональную компьютерную
            помощь,
            качественное и оперативное обслуживание, ремонт компьютеров любой сложности! В каком бы состоянии ни
            был
            Ваш компьютер, обратившись к нам, Вы можете быть уверены, что ремонт компьютера произведут настоящие
            профессионалы. Для Вашего удобства ремонт компьютеров и техники производится прямо у вас дома или в
            офисе, а при необходимости в нашем сервисном центре.
          </p>
          <p>
            Компьютерная служба «КомпоДоктор» - это:
          </p>
          <ul class="about-us-list">
            <li>Установка лицензионных программ.</li>
            <li>Ремонт компьютеров.</li>
            <li>Восстановление данных.</li>
            <li>Абонентское обслуживание.</li>
            <li>Создание сайтов.</li>
            <li>Монтаж и настройка проводных и Wi-Fi сетей.</li>
            <li>Обучающие мультимедийные уроки.</li>
            <li>Скидки на услуги.</li>
          </ul>
          <p>
            Кроме качественного ремонта компьютеров Вы также можете получить рекомендации по модернизации Ваших
            компьютеров, других устройств и программного обеспечения.
          </p>
        </div>
        <div class="about-us-img-wrap">
          <img class="img-fluid" src="@/assets/img/about-us/logo-1.png" alt="first-logo">
          <img class="img-fluid" src="@/assets/img/about-us/logo-2.png" alt="second-logo">
          <img class="img-fluid" src="@/assets/img/about-us/logo-3.png" alt="third-logo">
          <img class="img-fluid" src="@/assets/img/about-us/logo-4.png" alt="fourth-logo">
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style>
.about-us {
  padding-bottom: 50px;
  font-family: "Trebuchet MS", serif;
  font-size: 35px;
  font-weight: 400;
}

.about-us-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.about-us-header {
  margin: 90px 17px 0 0;
  font-size: 35px;
  font-weight: 400;
}

.about-us-desc {
  margin-top: 15px;
  color: #b83333;
  font-size: 18px;
}

.about-us-content-wrap {
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: #676767;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.51px;
  margin-top: 50px;
}

.about-us-text-wrap {
  max-width: 750px;
}

.about-us-img-wrap {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 70px;
}

.about-us-img-wrap img {
  max-height: 200px;
  max-width: 200px;
  margin-top: 10px;
}

.about-us h5 {
  margin-bottom: 5px;
  color: #272727;
  font-size: 15px;
  font-weight: 700;
}

.about-us-list {
  margin-left: 15px;
  list-style-image: url(@/assets//img/about-us/list-style.png);
}

</style>