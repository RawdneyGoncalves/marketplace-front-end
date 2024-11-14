<template>
    <div class="user" @click="openModal">
      <img data-bs-toggle="modal" data-bs-target="#userModal" width="25" height="25"
           src="https://img.icons8.com/ultraviolet/40/gender-neutral-user.png" alt="gender-neutral-user"
           title="gender-neutral-user" />
    </div>
  </template>
  
  <script setup lang="ts">
  const openModal = () => {
    const modal = new bootstrap.Modal(document.getElementById('userModal'));
    modal.show();
  }
  </script>
  
  <style scoped>
  .modal-header {
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid #f0f0f0;
  }
  
  .close {
    font-size: 2rem;
    color: #5c6bc0;
    transition: color 0.3s ease;
  }
  
  .close:hover {
    color: #e91e63;
  }
  
  .modal-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .form-group label {
    font-size: 1.1rem;
    color: #333;
    font-weight: 500;
  }
  
  .form-control {
    border-radius: 30px;
    border: 1px solid #ccc;
    padding: 12px;
    margin-bottom: 15px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-control:focus {
    border-color: #5c6bc0;
    box-shadow: 0 0 8px rgba(92, 107, 192, 0.5);
  }
  
  .form-check-label {
    font-size: 0.9rem;
    color: #333;
  }
  
  .btn-block {
    padding: 12px;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #5c6bc0;
    border: none;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .btn-block:hover {
    background-color: #4a5cb6;
  }
  
  .modal-footer a {
    color: #5c6bc0;
    font-size: 1rem;
    text-decoration: none;
  }
  
  .modal-footer a:hover {
    text-decoration: underline;
    color: #e91e63;
  }
  
  .modal-body {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .modal-dialog {
    max-width: 400px;
    margin: 30px auto;
  }
  </style>
  