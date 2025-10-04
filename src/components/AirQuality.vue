<template>
  <section class="air-quality">
    <div class="air-quality-container">
      <div class="air-quality-header">
        <h2 class="air-quality-title">{{ airQuality.title }}</h2>
        <p class="air-quality-subtitle">{{ airQuality.subtitle }}</p>
      </div>

      <div class="countries-grid">
        <div
          v-for="country in airQuality.countries"
          :key="country.id"
          class="country-card"
          @mouseenter="handleCardHover"
          @mouseleave="handleCardLeave"
        >
          <div class="country-header">
            <div class="country-flag">{{ country.flag }}</div>
            <h3 class="country-name">{{ country.name }}</h3>
          </div>

          <div class="periods-list">
            <div
              v-for="(period, index) in country.periods"
              :key="index"
              class="period-item"
            >
              <div class="period-header">
                <div
                  class="period-indicator"
                  :class="getPeriodClass(index)"
                ></div>
                <h4 class="period-title">{{ period.period }}</h4>
              </div>
              <p class="period-description">{{ period.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AirQualityProps } from "../types";

defineProps<AirQualityProps>();

const getPeriodClass = (index: number): string => {
  const classes = ["before", "during", "after"];
  return classes[index] || "before";
};

const handleCardHover = (event: Event) => {
  const card = event.currentTarget as HTMLElement;
  card.style.transform = "translateY(-8px)";
  card.style.boxShadow = "0 20px 40px rgba(0, 255, 136, 0.2)";
};

const handleCardLeave = (event: Event) => {
  const card = event.currentTarget as HTMLElement;
  card.style.transform = "translateY(0)";
  card.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
};
</script>

<style scoped>
.air-quality {
  padding: var(--spacing-3xl) 0;
  background: var(--secondary-bg);
}

.air-quality-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.air-quality-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.air-quality-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--accent-green), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.air-quality-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
}

.country-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.country-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--accent-green),
    var(--accent-green-dark)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.country-card:hover::before {
  transform: scaleX(1);
}

.country-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.country-flag {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-green-glow);
  border-radius: var(--radius-full);
  border: 2px solid var(--accent-green);
}

.country-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.periods-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.period-item {
  padding: var(--spacing-lg);
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.period-item:hover {
  border-color: var(--accent-green);
  box-shadow: 0 0 20px var(--accent-green-glow);
}

.period-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.period-indicator {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.period-indicator.before {
  background: #ff6b6b;
}

.period-indicator.during {
  background: var(--accent-green);
}

.period-indicator.after {
  background: #4ecdc4;
}

.period-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-green);
  margin: 0;
}

.period-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.875rem;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .air-quality-title {
    font-size: 2rem;
  }

  .countries-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .country-card {
    padding: var(--spacing-lg);
  }

  .country-flag {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
  }

  .country-name {
    font-size: 1.25rem;
  }

  .period-item {
    padding: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .air-quality-container {
    padding: 0 var(--spacing-sm);
  }

  .air-quality-title {
    font-size: 1.75rem;
  }

  .air-quality-subtitle {
    font-size: 1rem;
  }

  .country-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }

  .period-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
}
</style>
