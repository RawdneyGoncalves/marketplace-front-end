<template>
  <div class="navbar-item bc d-none d-xl-block d-lg-block py-0">
    <NuxtLink
      v-for="(link, idx) in navLinks"
      :key="idx"
      :to="link.Link"
      :id="idx"
      class="navbar-link"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  {
    name: 'Inicio',
    Link: '/'
  },
  {
    name: 'Produtos',
    Link: '/products'
  },
  {
    name: 'Contato',
    Link: '/contact'
  }
];
</script>

<style scoped>
.navbar-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.navbar-link {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 15px;
  padding: 5px 10px;
  transition: color 0.3s, transform 0.3s;
  text-decoration: none;
}

.navbar-link:hover {
  color: #5c6bc0;
  transform: translateY(-3px);
}

.navbar-link:active {
  color: #4a5cb6;
  transform: translateY(0);
}

.navbar-link:focus {
  outline: none;
}

@media (max-width: 1200px) {
  .navbar-item {
    display: none;
  }
}
</style>
