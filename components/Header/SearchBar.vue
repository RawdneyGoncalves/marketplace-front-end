<template>
    <div class="search-container d-none d-xl-block d-lg-block pr-3">
      <input type="search" class="search-input" placeholder="Search...">
    </div>
  </template>
  
  <style scoped lang="scss">
  .search-container {
    display: flex;
    justify-content: flex-end;
  }
  
  .search-input {
    outline: none;
    border: 1px solid #F8F8F8;
    background: #ededed url('@/assets/search.png') no-repeat 10px center;
    padding: 8px 10px 8px 40px;
    width: 180px;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
    margin-right: 10px;
  
    &::placeholder {
      color: #888;
      font-style: italic;
    }
  
    &:focus {
      width: 220px;
      padding-left: 40px;
      background-color: #fff;
      border: 1px solid #98ccfd;
      box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    }
  }
  </style>
  