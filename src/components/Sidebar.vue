<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <!-- About Section -->
      <div class="about-section animate-fade-in-left">
        <h2 class="section-title">{{ sidebar.aboutSection.title }}</h2>
        <h3 class="section-headline">{{ sidebar.aboutSection.headline }}</h3>
        
        <div class="about-services">
          <div 
            v-for="(service, index) in sidebar.aboutSection.services" 
            :key="service.id"
            class="about-service-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="about-service-visual">
              {{ service.icon }}
            </div>
            <div class="about-service-content">
              <h4 class="about-service-title">{{ service.title }}</h4>
              <p class="about-service-description">{{ service.description }}</p>
              <a :href="service.actionHref" class="about-service-link">
                {{ service.actionLabel }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Page Section -->
      <div class="page-section animate-fade-in-left">
        <h2 class="section-title">{{ sidebar.pageSection.title }}</h2>
        <h3 class="section-headline">{{ sidebar.pageSection.headline }}</h3>
        <div class="page-visual">
          {{ sidebar.pageSection.visual }}
        </div>
      </div>

      <!-- Visual Stats -->
      <div class="visual-stats animate-fade-in-right">
        <div class="stats-visual">
          <div class="stats-mesh"></div>
          <div class="stats-values">
            <span class="stats-value-1">{{ sidebar.visualStats.value1 }}</span>
            <span class="stats-value-2">{{ sidebar.visualStats.value2 }}</span>
          </div>
        </div>
        <p class="stats-description">{{ sidebar.visualStats.description }}</p>
      </div>

      <!-- Statistics -->
      <div class="statistics animate-fade-in-right">
        <div 
          v-for="(stat, index) in sidebar.statistics" 
          :key="index"
          class="stat-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { SidebarProps } from '../types';

defineProps<SidebarProps>();
</script>

<style scoped>
.sidebar {
  background: var(--primary-bg);
  padding: var(--spacing-3xl) var(--spacing-xl);
  position: relative;
}

.sidebar-content {
  max-width: 400px;
  margin: 0 auto;
}

/* Section Styles */
.section-title {
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-sm);
}

.section-headline {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: var(--spacing-xl);
}

/* About Section */
.about-services {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.about-service-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.about-service-card:hover {
  border-color: var(--accent-green);
  box-shadow: var(--shadow-green);
  transform: translateX(4px);
}

.about-service-visual {
  width: 40px;
  height: 40px;
  background: var(--accent-green-glow);
  border: 1px solid var(--accent-green);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
  flex-shrink: 0;
}

.about-service-content {
  flex: 1;
}

.about-service-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  line-height: 1.3;
}

.about-service-description {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: var(--spacing-sm);
}

.about-service-link {
  color: var(--accent-green);
  text-decoration: none;
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.about-service-link:hover {
  color: var(--text-primary);
}

/* Page Section */
.page-section {
  margin-top: var(--spacing-3xl);
}

.page-visual {
  width: 100px;
  height: 100px;
  background: var(--accent-green-glow);
  border: 2px solid var(--accent-green);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-3xl);
  margin: var(--spacing-lg) auto;
  animation: rotate 10s linear infinite;
}

/* Visual Stats */
.visual-stats {
  margin-top: var(--spacing-3xl);
  text-align: center;
}

.stats-visual {
  position: relative;
  height: 120px;
  margin-bottom: var(--spacing-lg);
}

.stats-mesh {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, var(--accent-green), transparent);
  border-radius: var(--radius-md);
  animation: meshFloat 3s ease-in-out infinite;
}

.stats-values {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.stats-value-1,
.stats-value-2 {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--accent-green);
  text-shadow: 0 0 10px var(--accent-green-glow);
}

.stats-description {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.4;
}

/* Statistics */
.statistics {
  margin-top: var(--spacing-3xl);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-md);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.stat-item:hover {
  border-color: var(--accent-green);
  box-shadow: var(--shadow-green);
  transform: translateY(-2px);
}

.stat-value {
  display: block;
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--accent-green);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Animations */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes meshFloat {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
  }
}

/* Animation delays for staggered effects */
.about-service-card {
  opacity: 0;
  transform: translateX(-20px);
}

.about-service-card.animate-fade-in-up {
  animation: fadeInLeft 0.6s ease-out forwards;
}

.stat-item {
  opacity: 0;
  transform: translateY(20px);
}

.stat-item.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .sidebar {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }
  
  .section-headline {
    font-size: var(--font-size-xl);
  }
  
  .statistics {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .sidebar {
    padding: var(--spacing-xl) var(--spacing-md);
  }
  
  .sidebar-content {
    max-width: 100%;
  }
  
  .about-service-card {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
  
  .about-service-visual {
    margin: 0 auto;
  }
  
  .statistics {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
  
  .stat-item {
    padding: var(--spacing-sm);
  }
  
  .stat-value {
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 480px) {
  .sidebar {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
  
  .section-headline {
    font-size: var(--font-size-lg);
  }
  
  .about-service-card {
    padding: var(--spacing-md);
  }
  
  .about-service-visual {
    width: 32px;
    height: 32px;
    font-size: var(--font-size-base);
  }
  
  .page-visual {
    width: 80px;
    height: 80px;
    font-size: var(--font-size-2xl);
  }
  
  .statistics {
    grid-template-columns: 1fr;
  }
}
</style>
