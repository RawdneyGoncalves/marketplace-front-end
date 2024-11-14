<template>
    <div class="col-3 d-none d-lg-block d-xl-block">
      <div class="card-selector">
        <div class="card-body p-4">
          <!-- Categoria -->
          <div class="search-title">
            <h4>Categorias +</h4>
            <h6 v-for="item in info.types" :key="item.name" @click="" :value="item.value">
              {{ item.name }}
            </h6>
          </div>
          <div class="search-title">
            <h4>Cor do produto</h4>
            <div class="colors">
              <h5>Color</h5>
              <span v-for="item in info.colors" :key="item.name" class="circle"
                :style="`background-color:${item.value}`" @click="" :value="item.name"></span>
            </div>
          </div>
          <div class="search-title">
            <h5>Faixa de preço</h5>
            <input type="range" min="0" max="100" value="50" class="slider" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const info = reactive({
    types: [
      { name: 'Table', value: 'table' },
      { name: 'Lamps', value: 'lamp' },
      { name: 'Chairs', value: 'chair' },
      { name: 'Sofas', value: 'sofa' }
    ],
    colors: [
      { name: 'yellow', value: '#FFC015' },
      { name: 'blue', value: '#829FAA' },
      { name: 'white', value: '#BFB8AE' },
      { name: 'silver', value: '#817A77' }
    ]
  })
  </script>
  
  <style scoped>
  .card-selector {
    color: #f8f9fa;
    height: 40rem;
    background: #2c3539 !important;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1), 0 26px 70px rgba(0, 0, 0, 0.2);
    padding: 20px;
  }
  
  .search-title {
    margin-bottom: 40px;
  }
  
  .search-title h4 {
    font-size: 1.25rem;
    color: #f2be00;
    font-weight: 700;
  }
  
  .search-title h6 {
    font-size: 1rem;
    color: #f8f9fa;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .search-title h6:hover {
    color: #f2be00;
  }
  
  .colors {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  
  .circle {
    height: 22px;
    width: 22px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .circle:hover {
    transform: scale(1.2);
  }
  
  .slider {
    width: 100%;
    height: 8px;
    -webkit-appearance: none;
    background: #e0e0e0;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #f2be00;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #f2be00;
    border-radius: 50%;
    cursor: pointer;
  }
  </style>
  