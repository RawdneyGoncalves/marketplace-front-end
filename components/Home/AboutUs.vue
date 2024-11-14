<template>
  <section class="sobre-nos">
    <h1 class="main-title text-center mb-5">Conforto que Transforma sua Casa</h1>
    
    <div class="row p-4 align-items-center">
      <div class="col-6">
        <img class="float-lg-right shadow-lg" src="~/assets/new.jpg" alt="Sofá moderno em ambiente elegante" title="Sofá contemporâneo" loading="lazy">
      </div>
      <div class="col-12 col-sm-6">
        <h2 class="feature-title">Design Contemporâneo<br>que Encanta</h2>
        <p class="feature-text">
          Descubra a perfeita harmonia entre conforto e estilo em cada detalhe dos nossos sofás.
          Linhas clean e acabamento premium transformam seu ambiente em um espaço único.
          <br><br>
          Cada peça é cuidadosamente projetada para trazer elegância e funcionalidade ao seu lar,
          criando um refúgio de relaxamento que combina com seu estilo de vida moderno.
        </p>
        <button class="cta-button">Explore a Coleção</button>
      </div>
    </div>

    <div class="row p-4 align-items-center">
      <div class="col-12 col-sm-6 text-sm-right order-sm-first order-12 feature-content">
        <h2 class="feature-title">Versatilidade que<br>Cabe na sua Vida</h2>
        <p class="feature-text">
          Sofás modulares que se adaptam ao seu espaço e necessidades.
          Transforme seu ambiente com peças versáteis que crescem com você.
          <br><br>
          Design inteligente que oferece múltiplas configurações, permitindo que você 
          aproveite cada centímetro do seu lar com estilo e praticidade.
        </p>
        <button class="cta-button">Ver Modelos</button>
      </div>
      <div class="col-6">
        <img class="shadow-lg" src="~/assets/33.jpg" alt="Sofá modular em ambiente clean" title="Sofá versátil" loading="lazy">
      </div>
    </div>
  </section>
</template>

<style scoped>
.sobre-nos {
  padding: 4rem 0;
  background: #fafafa;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.sobre-nos img {
  width: 90%;
  min-width: 380px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.sobre-nos img:hover {
  transform: translateY(-5px);
}

.feature-title {
  font-size: 2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.feature-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #546e7a;
  margin-bottom: 2rem;
}

.feature-content {
  padding-right: 3rem;
}

.cta-button {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: #34495e;
  border: none;
  border-radius: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cta-button:hover {
  background: #2c3e50;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }

  .feature-title {
    font-size: 1.8rem;
    text-align: center;
  }

  .feature-text {
    font-size: 1rem;
    text-align: center;
  }

  .feature-content {
    padding-right: 1rem;
    padding-left: 1rem;
    text-align: center;
  }

  .cta-button {
    display: block;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .sobre-nos img {
    min-width: 100%;
    margin-bottom: 2rem;
  }
}
</style>