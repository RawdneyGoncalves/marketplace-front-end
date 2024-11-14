<template>
  <div>
    <div :class="['cart', cart.isOpen ? 'on' : '']">
      <div class="cart-menu">
        <p class="text-center mt-4 pb-2 h3">Carrinho</p>
        <hr>
        <Notification v-if="!store.itemsNumber">
          Seu carrinho está vazio, adicione itens para continuar.
        </Notification>
        <div class="row" v-for="item in store.cartItems" :key="item.id">
          <CartItem :item="item" />
        </div>
        <div v-if="store.itemsNumber">
          <hr>
          <CartTotal />
        </div>
      </div>
    </div>
    <div :class="['modal', cart.isOpen ? '' : 'off']" @click="$emit('closeCart')"></div>
  </div>
</template>

<script setup>
const store = useMainStore()

const cart = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* Modal Overlay */
.modal {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Opacidade suave */
  backdrop-filter: blur(5px); /* Adiciona um efeito de desfoque */
  transition: background-color 0.3s ease-in-out;
}

.modal.off {
  display: none;
}

/* Transições */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Cart Body */
.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: #2f3a47;
  overflow-y: auto;
  z-index: 1051;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
}

.cart.on {
  transform: translateX(0);
}

.cart-menu {
  color: #fff;
  padding: 20px 15px;
}

h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #f4f4f4;
}

hr {
  border-color: #fff;
  margin: 10px 0;
}

.row {
  margin-top: 15px;
  margin-bottom: 15px;
}

/* Cart Item and Cart Total Styling */
.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.cart-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.cart-item-info {
  flex-grow: 1;
  margin-left: 10px;
}

.cart-item-info h5 {
  font-size: 1.2rem;
  color: #f4f4f4;
}

.cart-item-info .price {
  font-size: 1rem;
  color: #71acd6;
}

/* Cart Total */
.cart-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-top: 20px;
  color: #fff;
}

.cart-total .total {
  font-weight: 600;
  font-size: 1.5rem;
  color: #f4f4f4;
}

.cart-total .checkout-button {
  background-color: #f2be00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cart-total .checkout-button:hover {
  background-color: #e0a800;
}
</style>
