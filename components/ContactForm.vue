<template>
  <section class="contact-section">
    <div class="container-fluid py-5">
      <div class="row d-flex align-items-center">
        <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 image-container">
          <div class="image-wrapper">
            <img class="img-fluid" src="@/assets/speaker.jpg" alt="speaker" title="speaker">
          </div>
        </div>
        <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 form-container">
          <div class="form-wrapper">
            <h1 class="title">Olá Pessoal</h1>
            <h2 class="subtitle">tem uma ideia para discutir? Mande-nos mensagem!</h2>
            <form>
              <div class="form-group">
                <input type="text" class="form-control" required>
                <label class="label">Name</label>
                <div class="form-line"></div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" required>
                <label class="label">E-mail</label>
                <div class="form-line"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="3" required></textarea>
                <label class="label">Message</label>
                <div class="form-line"></div>
              </div>
              <button class="submit-btn" type="submit">
                Submit
                <span class="btn-overlay"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.image-container {
  padding: 2rem;
}

.image-wrapper {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-10px);
}

.form-container {
  padding: 3rem;
}

.form-wrapper {
  max-width: 500px;
  margin: 0 auto;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: #7dcf85;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

form {
  width: 100%;
  padding: 20px 0;
}

.form-group {
  width: 100%;
  position: relative;
  margin: 0 0 35px;
}

.form-group label {
  font-weight: 500;
  font-size: 1rem;
  color: #6c757d;
  position: absolute;
  top: 10px;
  left: 0;
  transition: all 0.3s ease;
  background: transparent;
  pointer-events: none;
}

.form-control {
  outline: none;
  box-shadow: none !important;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  font-size: 1rem;
  padding: 10px 0;
  width: 100%;
  transition: all 0.3s ease;
}

textarea.form-control {
  height: auto;
  min-height: 100px;
  resize: vertical;
}

.form-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #7dcf85;
  transition: all 0.3s ease;
}

.form-control:focus ~ .form-line,
.form-control:valid ~ .form-line {
  width: 100%;
}

.form-control:focus ~ label,
.form-control:valid ~ label {
  top: -20px;
  font-size: 0.85rem;
  color: #7dcf85;
}

.submit-btn {
  position: relative;
  background: #7dcf85;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(125, 207, 133, 0.3);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(125, 207, 133, 0.4);
}

.submit-btn:active {
  transform: translateY(-1px);
}

.btn-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  border-radius: 30px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.submit-btn:hover .btn-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .form-container {
    padding: 2rem;
  }
  
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .image-container {
    margin-bottom: 2rem;
  }
}
</style>