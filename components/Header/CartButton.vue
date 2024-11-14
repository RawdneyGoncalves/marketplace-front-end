<template>
    <div class="bag" @click="$emit('open')">
      <img class="pb-1" src="https://img.icons8.com/ultraviolet/70/shopping-cart.png" alt="move-by-trolley" title="cart-trolley">
      <span class="item-count" v-if="store.itemsNumber">{{ store.itemsNumber }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  const store = useMainStore()
  defineEmits(['open'])
  </script>
  
  <style scoped lang="scss">
  .bag {
    position: relative;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s ease, filter 0.3s ease;
    }
  
    img:hover {
      transform: scale(1.1);
      filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
    }
  
    .item-count {
      background-color: #f44336;
      border-radius: 50%;
      color: white;
      position: absolute;
      font-size: 14px;
      line-height: 1;
      padding: 5px;
      text-align: center;
      vertical-align: middle;
      bottom: 0;
      left: 60%;
      transform: translateX(-50%);
      animation: pulse 1.5s infinite;
    }
  
    /* Pulse animation for the item count */
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0.8;
      }
    }
  }
  </style>
  