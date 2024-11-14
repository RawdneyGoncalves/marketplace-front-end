<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-6 col-md-3">
          <div class="footer-widget">
            <ul class="list-unstyled">
              <NuxtLink to="/">
                <li>Sobre</li>
              </NuxtLink>
              <NuxtLink to="/">
                <li>Blog</li>
              </NuxtLink>
              <NuxtLink to="/">
                <li>Contato</li>
              </NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-6 col-md-3">
          <div class="footer-widget">
            <ul class="list-unstyled">
              <NuxtLink to="/products">
                <li>Novidades</li>
              </NuxtLink>
              <NuxtLink to="/products">
                <li>Catálogo</li>
              </NuxtLink>
              <NuxtLink to="/products">
                <li>Marcas</li>
              </NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-12 col-md-3 text-center text-md-left">
          <div class="footer-widget">
            <p class="address">Rua Félix de Paiva, nº 518</p>
            <p class="address">São Cristóvão, RJ</p>
            <p><a href="mailto:asff@fdsfsdc.com">asff@fdsfsdc.com</a></p>
            <p><a href="tel:+5587991740421">+55 87 99174-0421</a></p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <div class="social-info">
            <img width="35" height="35" loading="lazy" src="@/assets/twitter.png" alt="twitter">
            <img width="35" height="35" loading="lazy" src="@/assets/pinterest.png" alt="pinterest">
            <img width="35" height="35" loading="lazy" src="@/assets/facebook.png" alt="facebook">
            <img width="35" height="35" loading="lazy" src="@/assets/insta.png" alt="instagram">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <p class="tiny-footer">© 2020 Todos os Direitos Reservados</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer_area {
  background-color: #f8f9fa;
  color: #6c757d;
  padding: 40px 0;
}

.footer-widget {
  margin-bottom: 20px;
}

.footer-widget ul {
  padding-left: 0;
  list-style-type: none;
}

.footer-widget li {
  margin-bottom: 8px;
}

.footer-widget a {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-widget a:hover {
  color: #007bff;
}

.address {
  margin-bottom: 10px;
  font-weight: 500;
}

.social-info img {
  margin: 0 10px;
  transition: opacity 0.3s;
}

.social-info img:hover {
  opacity: 0.7;
}

.tiny-footer {
  font-size: 14px;
  color: #adb5bd;
}

@media (max-width: 767px) {
  .footer_area {
    padding: 30px 0;
  }
  
  .footer-widget {
    text-align: center;
  }
  
  .social-info img {
    margin: 0 8px;
  }
}
</style>
