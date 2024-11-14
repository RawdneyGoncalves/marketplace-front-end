<template>
  <section class="carousel-wrapper">
    <div class="carousel-container">
      <!-- Slides -->
      <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
          <img :src="slide.image" :alt="slide.alt" :title="slide.title" class="carousel-image">
          <div class="slide-overlay">
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-description">{{ slide.description }}</p>
            <button class="slide-cta">Saiba mais</button>
          </div>
        </div>
      </div>

      <!-- Navegação -->
      <button class="carousel-nav prev" @click="prevSlide" aria-label="Previous slide">
        <span class="nav-icon">‹</span>
      </button>
      <button class="carousel-nav next" @click="nextSlide" aria-label="Next slide">
        <span class="nav-icon">›</span>
      </button>

      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button 
          v-for="(_, index) in slides" 
          :key="index"
          :class="['indicator', { active: currentSlide === index }]"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: '/api/placeholder/1920/1080',
          alt: 'Sofá Moderno em L',
          title: 'Sofá Modular Contemporâneo',
          description: 'Design ergonômico com acabamento premium em veludo azul marinho'
        },
        {
          image: '/api/placeholder/1920/1080',
          alt: 'Sofá Retrátil',
          title: 'Sofá Retrátil Elegance',
          description: 'Conforto excepcional com sistema reclinável automático'
        },
        {
          image: '/api/placeholder/1920/1080',
          alt: 'Sofá Chesterfield',
          title: 'Chesterfield Clássico',
          description: 'O charme atemporal do capitonê em couro legítimo'
        }
      ],
      autoplayInterval: null
    }
  },
  mounted() {
    this.startAutoplay()
    this.preloadImages()
  },
  beforeDestroy() {
    this.stopAutoplay()
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 
        ? this.slides.length - 1 
        : this.currentSlide - 1
    },
    goToSlide(index) {
      this.currentSlide = index
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(this.nextSlide, 5000)
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval)
    },
    preloadImages() {
      this.slides.forEach(slide => {
        const img = new Image()
        img.src = slide.image
      })
    }
  }
}
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f5f5f5;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 80vh;
  max-height: 800px;
}

.carousel-slides {
  display: flex;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}

.carousel-slide {
  position: relative;
  min-width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.carousel-slide:hover .carousel-image {
  transform: scale(1.05);
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.carousel-slide:hover .slide-overlay {
  opacity: 1;
  transform: translateY(0);
}

.slide-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-description {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  max-width: 600px;
  line-height: 1.6;
}

.slide-cta {
  padding: 0.8rem 2rem;
  background: white;
  color: #333;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slide-cta:hover {
  background: #f8f8f8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  opacity: 0;
}

.carousel-wrapper:hover .carousel-nav {
  opacity: 1;
}

.carousel-nav:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.prev {
  left: 30px;
}

.next {
  right: 30px;
}

.nav-icon {
  line-height: 1;
}

.carousel-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.indicator {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.indicator:hover {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.5);
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .carousel-container {
    height: 60vh;
  }
  
  .slide-title {
    font-size: 1.8rem;
  }
  
  .slide-description {
    font-size: 1rem;
    max-width: 100%;
  }
  
  .carousel-nav {
    width: 45px;
    height: 45px;
    font-size: 2rem;
  }
  
  .slide-cta {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 50vh;
  }
  
  .slide-overlay {
    padding: 2rem;
  }
  
  .slide-title {
    font-size: 1.5rem;
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }
}
</style>