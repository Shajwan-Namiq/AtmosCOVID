<template>
  <section class="hero">
    <div class="hero-background">
      <img
        src="../assets/images/background.jpeg"
        alt="Space background"
        class="hero-background-image"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title animate-fade-in-up">
          {{ hero.title }}
        </h1>

        <div class="hero-description animate-fade-in-up">
          <p class="hero-subtitle">{{ hero.subtitle }}</p>
          <p class="hero-text">{{ hero.description }}</p>
        </div>

        <div class="hero-actions animate-fade-in-up">
          <a :href="hero.primaryAction.href" class="btn btn-primary">
            {{ hero.primaryAction.label }}
          </a>

          <a :href="hero.secondaryAction.href" class="btn btn-secondary">
            {{ hero.secondaryAction.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HeroProps } from "../types";

defineProps<HeroProps>();
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-3xl) 0;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-xl);
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-green) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  margin-bottom: var(--spacing-2xl);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.4;
}

.hero-text {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-actions .btn {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
  min-width: 180px;
}

/* Animation delays */
.hero-title {
  animation-delay: 0.1s;
}

.hero-description {
  animation-delay: 0.3s;
}

.hero-actions {
  animation-delay: 0.5s;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
  }

  .hero-content {
    padding: var(--spacing-2xl) 0;
  }

  .hero-title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-lg);
  }

  .hero-subtitle {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-md);
  }

  .hero-text {
    font-size: var(--font-size-sm);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: var(--font-size-base);
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 70vh;
  }

  .hero-content {
    padding: var(--spacing-xl) 0;
  }

  .hero-title {
    font-size: var(--font-size-2xl);
    line-height: 1.2;
  }

  .hero-description {
    margin-bottom: var(--spacing-xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-sm);
  }

  .hero-text {
    font-size: var(--font-size-xs);
  }

  .hero-actions .btn {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-sm);
  }
}
</style>
