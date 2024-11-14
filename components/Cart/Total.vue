<template>
    <div class="row align-items-center p-2" style="background:#7dcf85">
      <div class="col pl-3 pt-3">
        <h4>Subtotal</h4>
        <p class="fs-6 px-3" style="color:#303E49;margin-top: -8px">
          {{ `(${itemsNumber} items)` }}
        </p>
      </div>
      <div class="col text-center pr-3">
        <h4>R${{ totalPrice }}</h4>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useMainStore } from '~/store';
  import { storeToRefs } from 'pinia';
  
  const store = useMainStore();
  const { itemsNumber, totalPrice } = storeToRefs(store);
  </script>
  
  <style scoped>
  </style>