<template>
  <section class="services">
    <div class="container">
      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="service-card"
          :class="`animate-fade-in-up`"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="service-icon">
            {{ service.icon }}
          </div>
          
          <h3 class="service-title">
            {{ service.title }}
          </h3>
          
          <p class="service-description">
            {{ service.description }}
          </p>
          
          <a 
            :href="service.actionHref"
            class="service-link"
          >
            {{ service.actionLabel }}
            <span class="link-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServicesProps } from '../types';

defineProps<ServicesProps>();
</script>

<style scoped>
.services {
  padding: var(--spacing-3xl) 0;
  background: var(--secondary-bg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-green), var(--accent-green-dark));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-green-lg);
  border-color: var(--accent-green);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: var(--accent-green-glow);
  border: 2px solid var(--accent-green);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-3xl);
  margin: 0 auto var(--spacing-lg);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: var(--accent-green);
  box-shadow: var(--shadow-green);
  transform: scale(1.1);
}

.service-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

.service-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-base);
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--accent-green);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--font-size-base);
  transition: all 0.3s ease;
  position: relative;
}

.service-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-green);
  transition: width 0.3s ease;
}

.service-link:hover::after {
  width: 100%;
}

.service-link:hover {
  color: var(--text-primary);
  transform: translateX(4px);
}

.link-arrow {
  transition: transform 0.3s ease;
  font-size: var(--font-size-lg);
}

.service-link:hover .link-arrow {
  transform: translateX(4px);
}

/* Animation states */
.service-card {
  opacity: 0;
  transform: translateY(30px);
}

.service-card.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
  }
  
  .service-card {
    padding: var(--spacing-xl);
  }
}

@media (max-width: 768px) {
  .services {
    padding: var(--spacing-2xl) 0;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .service-card {
    padding: var(--spacing-lg);
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
    font-size: var(--font-size-2xl);
  }
  
  .service-title {
    font-size: var(--font-size-lg);
  }
  
  .service-description {
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 480px) {
  .services-grid {
    gap: var(--spacing-md);
  }
  
  .service-card {
    padding: var(--spacing-md);
  }
  
  .service-icon {
    width: 50px;
    height: 50px;
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-md);
  }
  
  .service-title {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-sm);
  }
  
  .service-description {
    font-size: var(--font-size-xs);
    margin-bottom: var(--spacing-lg);
  }
  
  .service-link {
    font-size: var(--font-size-sm);
  }
}

/* Enhanced hover effects */
@keyframes iconPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 var(--accent-green-glow);
  }
  50% {
    box-shadow: 0 0 0 10px var(--accent-green-glow);
  }
}

.service-card:hover .service-icon {
  animation: iconPulse 2s ease-in-out infinite;
}
</style>
