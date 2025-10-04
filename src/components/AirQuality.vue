<template>
  <section class="air-quality">
    <div class="air-quality-container">
      <div class="air-quality-header">
        <h2 class="air-quality-title">{{ airQuality.title }}</h2>
        <p class="air-quality-subtitle">{{ airQuality.subtitle }}</p>
      </div>

      <div class="timeline-container">
        <div class="timeline-header">
          <h3 class="timeline-title">COVID-19 Impact Timeline</h3>
          <p class="timeline-subtitle">
            Air quality changes across three key periods
          </p>
        </div>

        <div class="timeline">
          <div
            class="timeline-period"
            v-for="(period, periodIndex) in timelinePeriods"
            :key="periodIndex"
          >
            <div class="period-marker" :class="getPeriodClass(periodIndex)">
              <div class="marker-icon">{{ getPeriodIcon(periodIndex) }}</div>
            </div>
            <div class="period-content">
              <h4 class="period-title">{{ period.name }}</h4>
              <div class="countries-impact">
                <div
                  v-for="country in airQuality.countries"
                  :key="country.id"
                  class="country-impact"
                >
                  <div class="country-info">
                    <span class="country-flag">{{ country.flag }}</span>
                    <span class="country-name">{{ country.name }}</span>
                  </div>
                  <p class="impact-description">
                    {{ country.periods[periodIndex].description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { AirQualityProps } from "../types";

defineProps<AirQualityProps>();

const timelinePeriods = computed(() => [
  { name: "Before COVID (2019)", icon: "📊" },
  { name: "During COVID (2020)", icon: "🔒" },
  { name: "After COVID (2021-2022)", icon: "📈" },
]);

const getPeriodClass = (index: number): string => {
  const classes = ["before", "during", "after"];
  return classes[index] || "before";
};

const getPeriodIcon = (index: number): string => {
  const icons = ["📊", "🔒", "📈"];
  return icons[index] || "📊";
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

/* Timeline Styles */
.timeline-container {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  position: relative;
}

.timeline-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.timeline-subtitle {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

.timeline {
  position: relative;
  padding-left: var(--spacing-2xl);
}

.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    #ff6b6b 0%,
    var(--accent-green) 50%,
    #4ecdc4 100%
  );
}

.timeline-period {
  position: relative;
  margin-bottom: var(--spacing-3xl);
}

.timeline-period:last-child {
  margin-bottom: 0;
}

.period-marker {
  position: absolute;
  left: -44px;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--card-bg);
  z-index: 2;
}

.period-marker.before {
  background: #ff6b6b;
  box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
}

.period-marker.during {
  background: var(--accent-green);
  box-shadow: 0 0 20px var(--accent-green-glow);
}

.period-marker.after {
  background: #4ecdc4;
  box-shadow: 0 0 20px rgba(78, 205, 196, 0.3);
}

.marker-icon {
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.period-content {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  transition: all 0.3s ease;
}

.period-content:hover {
  border-color: var(--accent-green);
  box-shadow: 0 0 20px var(--accent-green-glow);
}

.period-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 var(--spacing-lg) 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.countries-impact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.country-impact {
  padding: var(--spacing-md);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.country-impact:hover {
  border-color: var(--accent-green);
  transform: translateX(4px);
}

.country-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.country-flag {
  font-size: 1.25rem;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-green-glow);
  border-radius: var(--radius-full);
  border: 1px solid var(--accent-green);
}

.country-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-green);
}

.impact-description {
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

  .timeline-container {
    padding: var(--spacing-lg);
  }

  .timeline {
    padding-left: var(--spacing-lg);
  }

  .timeline::before {
    left: 16px;
  }

  .period-marker {
    left: -24px;
    width: 32px;
    height: 32px;
  }

  .marker-icon {
    font-size: 0.875rem;
  }

  .period-content {
    padding: var(--spacing-lg);
  }

  .period-title {
    font-size: 1.125rem;
  }

  .countries-impact {
    gap: var(--spacing-md);
  }

  .country-impact {
    padding: var(--spacing-sm);
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

  .timeline-container {
    padding: var(--spacing-md);
  }

  .timeline {
    padding-left: var(--spacing-md);
  }

  .timeline::before {
    left: 12px;
  }

  .period-marker {
    left: -20px;
    width: 28px;
    height: 28px;
  }

  .marker-icon {
    font-size: 0.75rem;
  }

  .period-content {
    padding: var(--spacing-md);
  }

  .period-title {
    font-size: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }

  .country-info {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }

  .country-flag {
    font-size: 1rem;
    width: 25px;
    height: 25px;
  }

  .country-name {
    font-size: 0.875rem;
  }
}
</style>
