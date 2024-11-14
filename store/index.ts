import { defineStore } from "pinia";
import { State } from '@/components/types'

export const useMainStore = defineStore("main", {
  state: (): State => ({
    productInfo: {},
    cartItems: [],
    items: [
      {
        id: 0,
        img: "1.jpg",
        title: "Sofá Cabriole",
        price: 1599.99,
        color: "amarelo",
        type: "sofá",
      },
      {
        id: 1,
        img: "2.jpg",
        title: "Luminária",
        price: 799.99,
        color: "amarelo",
        type: "luminária",
      },
      {
        id: 2,
        img: "3.jpg",
        title: "Poltrona de Braço",
        price: 899.99,
        color: "amarelo",
        type: "cadeira",
      },
      {
        id: 3,
        img: "4.jpg",
        title: "Poltrona Asa de Anjo",
        price: 1349.99,
        color: "vermelho",
        type: "cadeira",
      },
      {
        id: 4,
        img: "5.jpg",
        title: "Sofá Camel Back",
        price: 2299.99,
        color: "branco",
        type: "sofá",
      },
      {
        id: 5,
        img: "6.jpg",
        title: "Banco",
        price: 249.99,
        color: "branco",
        type: "cadeira",
      },
      {
        id: 6,
        img: "7.jpg",
        title: "Cadeira Windsor",
        price: 1499.99,
        color: "azul",
        type: "cadeira",
      },
      {
        id: 7,
        img: "8.jpg",
        title: "Mesa C",
        price: 1699.99,
        color: "vermelho",
        type: "mesa",
      },
      {
        id: 8,
        img: "9.jpg",
        title: "Mesa de Centro",
        price: 1299.99,
        color: "branco",
        type: "mesa",
      },
      {
        id: 9,
        img: "10.jpg",
        title: "Cadeira de Escritório",
        price: 899.99,
        color: "amarelo",
        type: "cadeira",
      },
      {
        id: 10,
        img: "11.jpg",
        title: "Cadeira de Jardim",
        price: 299.99,
        color: "branco",
        type: "cadeira",
      },
      {
        id: 11,
        img: "12.jpg",
        title: "SOFA Novelty",
        price: 599.99,
        color: "vermelho",
        type: "luminária",
      },
      {
        id: 12,
        img: "13.jpg",
        title: "Luminária Lava",
        price: 799.99,
        color: "azul",
        type: "luminária",
      },
      {
        id: 13,
        img: "14.jpg",
        title: "Cadeira Deck",
        price: 1299.99,
        color: "branco",
        type: "cadeira",
      },
      {
        id: 14,
        img: "table-1.jpg",
        title: "Mesa de Acento",
        price: 1699.99,
        color: "branco",
        type: "mesa",
      },
    ],
  }),
  getters: {
    // Cart Component
    itemsNumber: ({ cartItems }): number => cartItems.length,
    totalPrice: ({ cartItems }): number | undefined => {
      if (cartItems.length !== 1) {
        const sum = cartItems?.reduce((acc: number, obj: any) => {
          let result = acc + obj.price
          return result
        }, 0);
        return sum;
      }
      return cartItems[0].price;
    },
  },
  actions: {
    // Cart Component
    inCart(n: object) {
      return this.cartItems.push(n);
    },
    outCart(n: number) {
      let index = this.cartItems.findIndex((x) => x.id === n);
      return this.cartItems.splice(index, 1);
    },
    // Info Component
    addtoInfo(n: number) {
      const selectedProduct = this.items.find((item) => item.id === n);
      this.productInfo = selectedProduct!;
    },
  },
});
