<template>
  <div class="modal fade" tabindex="-1" id="userModal" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="px-3 py-2">
            <h4 class="modal-title">Registre-se</h4>
            <div class="form-group">
              <label for="userEmail">Endereço de Email</label>
              <input type="email" id="userEmail" class="form-control" placeholder="email@example.com">
            </div>
            <div class="form-group">
              <label for="userPassword">Senha</label>
              <input type="password" id="userPassword" class="form-control" placeholder="Password">
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="rememberMe">
              <label class="form-check-label" for="rememberMe">
                Lembre Minha Senha
              </label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">Registrar</button>
          </form>
        </div>
        <div class="modal-footer">
          <a class="dropdown-item" href="#">Esqueceu sua senha?</a>
          <a class="dropdown-item text-right" href="#">Registre-se</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-header {
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #f0f0f0;
  padding: 0.5rem 1.5rem;
}

.close {
  font-size: 2rem;
  color: #5c6bc0;
  border: none;
  background: transparent;
  padding: 0;
  transition: transform 0.2s ease, color 0.3s ease;
}

.close:hover {
  color: #e91e63;
  transform: rotate(45deg);
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
  max-width: 450px;
  margin: 30px auto;
}
</style>
