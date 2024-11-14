<template>
  <span class="navbar-brand py-0 pl-5">
    <img src="~/assets/fi-logo.svg" width="40" height="40" alt="site-logo" title="site-logo">
  </span>
</template>

<style scoped>
.navbar-brand {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  transition: padding-left 0.3s ease-in-out;
}

@media only screen and (max-width: 768px) {
  .navbar-brand {
    margin-left: 20px; /* Ajuste na margem para telas menores */
  }

  .navbar-brand img {
    width: 35px;
    height: 35px; /* Tamanho menor para o logo em telas pequenas */
  }
}

.navbar-brand img {
  transition: transform 0.3s ease;
}

.navbar-brand img:hover {
  transform: scale(1.1); /* Efeito de hover para o logo */
}
</style>
