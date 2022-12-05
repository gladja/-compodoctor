<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-logo">
          <img class="img-fluid" src="@/assets/img/footer/footer-logo.png" alt="КомпоДоктор">
        </div>
        <div class="footer-social">
          <a class="footer-facebook" href="https://www.facebook.com/pcdoc.ck/" target="_blank">
<!--             onmouseout="querySelector('img').src='@/assets/img/footer/facebook-icon.svg'"-->
<!--             onmouseover="querySelector('img').src='@/assets/img/footer/facebook-hover.svg'">-->
            <img class="social-icons img-fluid" src="@/assets/img/footer/facebook-icon.svg"
                 alt="Facebook">
          </a>
          <a class="footer-inst" href="https://www.instagram.com/kompodoktor/" target="_blank">
<!--             onmouseout="querySelector('img').src='@/assets/img/footer/instagram-logo.svg'"-->
<!--             onmouseover="querySelector('img').src='@/assets/img/footer/instagram-hover.svg'">-->
<!--            <img class="social-icons img-fluid"-->
<!--                 src="@/assets/img/footer/instagram-logo.svg"-->
<!--                 alt="Instagram">-->
            <IconVK />

          </a>
        </div>
<!--        <div class="footer-phone">-->
<!--          <p class="footer-slogan">Мы всегда рядом <br><span class="footer-number">56-90-90</span></p>-->
<!--          <a class="go-top" href="#header"-->
<!--             onmouseout="querySelector('img').src='img/footer/go-top-icon.png'"-->
<!--             onmouseover="querySelector('img').src='img/footer/go-top-hover.png'">-->
<!--            <img id="go-top" class="img-fluid footer-go-top"-->
<!--                 src="img/footer/go-top-icon.png" alt="go-top"></a>-->
<!--        </div>-->
      </div>
    </div>
  </footer>
</template>

<script>
import IconVK from "@/components/Icons/IconVK";
export default {
  name: "FooterEnd",
  components: {IconVK},
  props: ['show'],
}
</script>

<style>
.footer {
  background-color: #3b3b3b;
}

.footer-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1050px;
  margin: 0 auto;
  height: 80px;
}

.footer-facebook, .footer-vk, .footer-inst {
  margin-right: 10%;
}

.footer-facebook:hover, .footer-vk:hover, .footer-inst:hover {
  -webkit-filter: drop-shadow(0 2px 8px #000000);
  filter: drop-shadow(5px 5px 5px #444);
  color: rgba(0, 0, 0, 0);
}

.footer-phone {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  color: #e9e9e9;
  font-family: "Trebuchet MS", serif;
  font-size: 14px;
}

.map-link {
  color: #252525;
}

.map-link:hover {
  text-decoration-line: underline;
  color: #252525;
}

.footer-slogan {
  margin: 0;
}

.footer-number {
  color: #e9e9e9;
  font-family: "DS Hiline", serif;
  font-size: 15px;
  font-weight: 400;
}

.social-icons {
  max-width: 50px;
}

.footer-go-top {
  margin-left: 80px;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  right: 10px;
  display: none;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
}

.footer-go-top:hover {
  -webkit-filter: drop-shadow(5px 5px 5px #444);
  filter: drop-shadow(5px 5px 5px #444);
}

.footer-social {
  display: flex;
  padding-right: 20px;

}
</style>