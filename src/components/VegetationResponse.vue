<template>
  <section class="vegetation-response">
    <div class="vegetation-container">
      <div class="vegetation-header">
        <h2 class="vegetation-title">{{ vegetationResponse.title }}</h2>
        <p class="vegetation-subtitle">{{ vegetationResponse.subtitle }}</p>
      </div>

      <div class="vegetation-content">
        <div class="accordion-container">
          <div
            v-for="(finding, index) in vegetationResponse.findings"
            :key="finding.id"
            class="accordion-item"
            :class="{ 'accordion-active': activeAccordion === index }"
          >
            <div class="accordion-header" @click="toggleAccordion(index)">
              <div class="accordion-title-section">
                <div class="finding-icon">🌱</div>
                <h3 class="accordion-title">{{ finding.title }}</h3>
                <div v-if="finding.location" class="location-badge">
                  <span class="location-icon">📍</span>
                  <span class="location-text">{{ finding.location }}</span>
                </div>
              </div>
              <div class="accordion-toggle">
                <span
                  class="toggle-icon"
                  :class="{ 'toggle-rotated': activeAccordion === index }"
                >
                  ▼
                </span>
              </div>
            </div>

            <div
              class="accordion-content"
              :class="{ 'content-expanded': activeAccordion === index }"
            >
              <div class="accordion-body">
                <p class="finding-description">{{ finding.description }}</p>

                <div v-if="finding.impact" class="finding-impact">
                  <div class="impact-header">
                    <span class="impact-icon">📈</span>
                    <span class="impact-label">Impact:</span>
                  </div>
                  <p class="impact-text">{{ finding.impact }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Satellite Image -->
        <div class="vegetation-image-section">
          <div class="satellite-image-container">
            <img :src="satelliteImage" class="satellite-image" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { VegetationResponseProps } from "../types";
import satelliteImage from "../assets/images/settlite.jpeg";

defineProps<VegetationResponseProps>();

const activeAccordion = ref<number | null>(0); // First item open by default

const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};
</script>

<style scoped>
.vegetation-response {
  padding: var(--spacing-3xl) 0;
  background: var(--primary-bg);
}

.vegetation-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.vegetation-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.vegetation-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--accent-green), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.vegetation-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.vegetation-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

/* Accordion Styles */
.accordion-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.accordion-item {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-item.accordion-active {
  border-color: var(--accent-green);
  box-shadow: 0 0 20px var(--accent-green-glow);
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) var(--spacing-xl);
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--card-bg);
}

.accordion-header:hover {
  background: var(--secondary-bg);
}

.accordion-title-section {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1;
}

.finding-icon {
  font-size: 1.25rem;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-green-glow);
  border-radius: var(--radius-full);
  border: 2px solid var(--accent-green);
  flex-shrink: 0;
}

.accordion-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
}

.location-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  margin-left: var(--spacing-md);
}

.location-icon {
  font-size: 0.75rem;
}

.location-text {
  color: var(--accent-green);
  font-size: 0.75rem;
  font-weight: 600;
}

.accordion-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: var(--radius-full);
  background: var(--accent-green-glow);
  border: 1px solid var(--accent-green);
  transition: all 0.3s ease;
}

.toggle-icon {
  color: var(--accent-green);
  font-size: 0.875rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.toggle-rotated {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.content-expanded {
  max-height: 500px;
}

.accordion-body {
  padding: 0 var(--spacing-xl) var(--spacing-xl);
  background: var(--primary-bg);
}

.finding-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.875rem;
  margin: 0 0 var(--spacing-lg) 0;
}

.finding-impact {
  padding: var(--spacing-md);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  border-left: 3px solid var(--accent-green);
}

.impact-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.impact-icon {
  font-size: 1rem;
}

.impact-label {
  color: var(--accent-green);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.impact-text {
  color: var(--text-primary);
  line-height: 1.5;
  font-size: 0.875rem;
  margin: 0;
}

/* Image Section */
.vegetation-image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.satellite-image-container {
  position: relative;
  width: 100%;
  max-width: 350px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.satellite-image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 255, 136, 0.2);
}

.satellite-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-xl);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: var(--spacing-lg);
  text-align: center;
}

.image-text {
  color: var(--text-primary);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.image-subtext {
  color: var(--accent-green);
  font-size: 0.875rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .vegetation-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .vegetation-image-section {
    order: -1;
    min-height: 200px;
  }

  .satellite-image-container {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .vegetation-title {
    font-size: 2rem;
  }

  .accordion-header {
    padding: var(--spacing-md) var(--spacing-lg);
  }

  .accordion-title-section {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }

  .location-badge {
    margin-left: 0;
  }

  .accordion-body {
    padding: 0 var(--spacing-lg) var(--spacing-lg);
  }

  .finding-icon {
    font-size: 1rem;
    width: 30px;
    height: 30px;
  }

  .accordion-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .vegetation-container {
    padding: 0 var(--spacing-sm);
  }

  .vegetation-title {
    font-size: 1.75rem;
  }

  .vegetation-subtitle {
    font-size: 1rem;
  }

  .accordion-header {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .accordion-body {
    padding: 0 var(--spacing-md) var(--spacing-md);
  }

  .satellite-image-container {
    max-width: 250px;
  }

  .image-overlay {
    padding: var(--spacing-md);
  }

  .image-text {
    font-size: 1rem;
  }

  .image-subtext {
    font-size: 0.75rem;
  }
}
</style>
