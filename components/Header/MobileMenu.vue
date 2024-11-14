<template>
    <div class="dropdown d-xl-none d-lg-none mr-auto">
      <img src="https://img.icons8.com/office/35/menu--v1.png" width="28" height="28" data-bs-toggle="dropdown"
           data-bs-target="#navd" aria-haspopup="true" aria-expanded="false" alt="mobile-menu" title="mobile-menu">
      <div class="dropdown-menu hb" aria-labelledby="navd">
        <NuxtLink class="dropdown-item" to="/">Home</NuxtLink>
        <NuxtLink class="dropdown-item" to="/products">Products</NuxtLink>
        <NuxtLink class="dropdown-item" to="/contact">Contact us</NuxtLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Menu mobile */
  .dropdown-menu {
    background-color: #2c3539;
    border-radius: 8px;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
  
  .dropdown-menu .dropdown-item {
    color: #fff;
    font-size: 16px;
    padding: 12px 16px;
    text-transform: uppercase;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }
  
  .dropdown-menu .dropdown-item:hover {
    background-color: #6394F8;
    color: #fff;
  }
  
  .dropdown img {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .dropdown img:hover {
    transform: rotate(90deg);
  }
  
  /* Responsividade e Ajustes de Layout */
  @media (max-width: 768px) {
    .dropdown-menu {
      width: 200px; /* Ajusta a largura do menu em telas menores */
      padding: 10px 0;
    }
  
    .dropdown-item {
      font-size: 14px; /* Ajusta o tamanho da fonte em telas menores */
    }
  }
  </style>
  