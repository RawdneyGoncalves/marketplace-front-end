<template>
  <div>
    <h1 class="page-title text-center">Novidades</h1>
    <nav class="breadcrumb-nav d-flex justify-content-center" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/">Início</NuxtLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Produtos</li>
      </ol>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.page-title {
  font-size: 2rem;
  color: #343a40;
  font-weight: 700;
  margin-bottom: 20px;
}

.breadcrumb-nav {
  .breadcrumb {
    background: transparent !important;
    color: #495057 !important;
    font-size: 1rem;
    padding: 0;

    li {
      text-decoration: none !important;
      color: #f2be00 !important;
    }

    a {
      text-decoration: none !important;
      color: #495057 !important;
      font-weight: 600;
    }

    .breadcrumb-item + .breadcrumb-item::before {
      color: #6c757d; 
    }
  }
}
</style>
