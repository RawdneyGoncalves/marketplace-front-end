# Marketplace Front-end

## Instalação

```sh
npm install

# para desenvolvimento
npm run dev

# produção
npm run build
```

## Estrutura do Projeto

```bash
Marketplace-front-end/
├── assets/
│   ├── styles/
│   └── __Project Assests__
├── Components/
│   ├── Details/
│   ├── Header/
│   ├── Home/
│   ├── Products/
│   ├── Cart.vue
│   ├── ContactForm.vue
│   ├── Footer.vue
│   ├── Header.vue
│   ├── NewsLetter.vue
├── Composables/
│   │   └── useAsset.ts
├── Layouts/
│   │   └── default.vue
├── Pages/
│   │   ├── Details/
│   │   ├── Contact.vue
│   │   ├── Index.vue
│   │   └── Products.vue
├── Plugins
```

## Dev environment

Mais informações sobre o ambiente:

| Plugin        | README                                   |
| ------------- | ---------------------------------------- |
| Nuxt DevTools | [https://devtools.nuxtjs.org/]           |
| Vite          | [https://vitejs.dev/guide/]              |
| AutoPrefixer  | [https://autoprefixer.github.io/]        |

OBS: este projeto requer a versão 18.20.5 do Node.js devido a uma dependência da biblioteca Nuxt.js. Essa versão específica do Node.js é necessária para evitar conflitos.