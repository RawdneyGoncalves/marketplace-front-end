<template>
    <div class="d-flex align-items-center">
      <!-- Dropdown para Ordenação -->
      <div class="dropdown flex-fill px-4 px-sm-0">
        <a class="btn btn-dropdown" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          ORDENAR POR
          <span class="text-highlight">{{ sort }}</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" @click="sortBy('newset')" value="newset">Mais recentes</a>
          <a class="dropdown-item" @click="sortBy('price')" value="price">Menor preço</a>
          <a class="dropdown-item" @click="sortBy('trending')" value="trending">Maior preço</a>
        </div>
      </div>
  
      <div class="dropdown d-block d-lg-none d-xl-none px-4 px-sm-0">
        <button class="btn btn-dropdown" role="button" id="MenuLink" data-bs-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          CATEGORIAS
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const sort = ref('Padrão')
  
  const emit = defineEmits<{
    (e: 'sortItem', name: string): void
  }>()
  
  function sortBy(value: string): void {
    emit('sortItem', value);
    sort.value = value.charAt(0).toUpperCase() + value.slice(1); 
  }
  </script>
  
  <style scoped>
  .btn-dropdown {
    color: #343a40;
    background-color: #fff;
    border-radius: 0.375rem;
    border: 1px solid #ccc;
    font-weight: 600;
    padding: 10px 18px;
    transition: background-color 0.3s, color 0.3s;
    text-transform: uppercase;
  }
  
  .btn-dropdown:hover {
    background-color: #f2be00;
    color: #fff;
  }
  
  /* Menu suspenso estilizado */
  .dropdown-menu {
    background-color: #f8f8f8;
    color: #2c3539;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 8px 0;
  }
  
  .dropdown-menu a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .dropdown-menu a:hover {
    background-color: #dae0e5;
    cursor: pointer;
  }
  
  /* Destaque para a seleção ativa */
  .text-highlight {
    color: #f2be00;
    font-weight: 700;
  }
  </style>
  