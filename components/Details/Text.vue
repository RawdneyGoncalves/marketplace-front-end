<template>
  <div>
    <div class="more-info d-flex justify-content-between align-items-center text-center">
      <div 
        class="tab-item flex-fill" 
        v-for="(info, index) in text.moreInfo" 
        :key="index"
        :class="{'active': index === text.active}"
        @click="selectedInfo(index)"
      >
        <h6>{{ info }}</h6>
      </div>
    </div>

    <div class="container pt-3">
      <div class="row">
        <p class="description-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const text = reactive({
  moreInfo: ['Descrição', 'Regas de garantia do produto', 'Avaliações do produto'],
  active: 0,
});

const selectedInfo = (index: number): void => {
  text.active = index;
};
</script>

<style scoped>
.more-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.tab-item {
  cursor: pointer;
  padding: 10px 20px;
  color: #888;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.tab-item:hover {
  color: #2c3e50;
}

.tab-item.active h6 {
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
}

.description-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.description-text p {
  margin: 0;
}
</style>
