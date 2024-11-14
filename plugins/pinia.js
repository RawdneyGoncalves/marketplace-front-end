import { defineNuxtPlugin } from '#app';
import { useMainStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }) => {
  const store = useMainStore($pinia);
  
  return {
    provide: {
      store
    }
  };
});