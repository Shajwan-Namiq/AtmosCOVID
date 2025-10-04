<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Logo and Contact -->
        <div class="footer-section">
          <div class="footer-logo">
            <div class="logo-icon">V</div>
            <span class="logo-text">{{ footer.logo }}</span>
          </div>

          <div class="contact-info">
            <div class="contact-item" v-if="footer.contact.email">
              <span class="contact-label">Email:</span>
              <a :href="`mailto:${footer.contact.email}`" class="contact-value">
                {{ footer.contact.email }}
              </a>
            </div>

            <div class="contact-item" v-if="footer.contact.phone">
              <span class="contact-label">Phone:</span>
              <a :href="`tel:${footer.contact.phone}`" class="contact-value">
                {{ footer.contact.phone }}
              </a>
            </div>

            <div class="contact-item" v-if="footer.contact.address">
              <span class="contact-label">Address:</span>
              <span class="contact-value">{{ footer.contact.address }}</span>
            </div>
          </div>
        </div>

        <!-- Statistics -->
        <div class="footer-section">
          <h3 class="footer-title">{{ footer.statistics.title }}</h3>
          <h4 class="footer-headline">{{ footer.tagline }}</h4>

          <div class="footer-stats">
            <div
              v-for="(stat, index) in footer.statistics.items"
              :key="index"
              class="footer-stat-item"
            >
              <span class="footer-stat-value">{{ stat.value }}</span>
              <span class="footer-stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="footer-copyright">© 2025 AtmosCOVID. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { FooterProps } from "../types";

defineProps<FooterProps>();
</script>

<style scoped>
.footer {
  background: var(--primary-bg);
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  position: relative;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-green), transparent);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-2xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* Logo Section */
.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: var(--accent-green);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--primary-bg);
  font-size: var(--font-size-xl);
  box-shadow: var(--shadow-green);
}

.logo-text {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--text-primary);
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.contact-label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-value {
  color: var(--text-primary);
  text-decoration: none;
  font-size: var(--font-size-base);
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: var(--accent-green);
}

/* Statistics Section */
.footer-title {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-sm);
}

.footer-headline {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: var(--spacing-xl);
}

.footer-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.footer-stat-item {
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.footer-stat-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-green);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.footer-stat-item:hover::before {
  transform: scaleX(1);
}

.footer-stat-item:hover {
  border-color: var(--accent-green);
  box-shadow: var(--shadow-green);
  transform: translateY(-2px);
}

.footer-stat-value {
  display: block;
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--accent-green);
  margin-bottom: var(--spacing-xs);
}

.footer-stat-label {
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: var(--spacing-lg);
  text-align: center;
}

.footer-copyright {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    gap: var(--spacing-2xl);
  }

  .footer-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }

  .footer-stat-item {
    padding: var(--spacing-md);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-2xl) 0 var(--spacing-lg);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .footer-section {
    text-align: center;
  }

  .contact-info {
    align-items: center;
  }

  .contact-item {
    text-align: center;
  }

  .footer-headline {
    font-size: var(--font-size-xl);
  }

  .footer-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }

  .footer-stat-item {
    padding: var(--spacing-sm);
  }

  .footer-stat-value {
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 480px) {
  .footer {
    padding: var(--spacing-xl) 0 var(--spacing-md);
  }

  .footer-content {
    gap: var(--spacing-lg);
  }

  .footer-logo {
    justify-content: center;
  }

  .logo-icon {
    width: 32px;
    height: 32px;
    font-size: var(--font-size-lg);
  }

  .logo-text {
    font-size: var(--font-size-lg);
  }

  .footer-headline {
    font-size: var(--font-size-lg);
  }

  .footer-stats {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .footer-stat-item {
    padding: var(--spacing-sm);
  }

  .footer-stat-value {
    font-size: var(--font-size-base);
  }

  .footer-stat-label {
    font-size: var(--font-size-xs);
  }
}

/* Enhanced animations */
.footer-stat-item {
  opacity: 0;
  transform: translateY(20px);
}

.footer-stat-item:nth-child(1) {
  animation: fadeInUp 0.6s ease-out 0.1s forwards;
}
.footer-stat-item:nth-child(2) {
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
}
.footer-stat-item:nth-child(3) {
  animation: fadeInUp 0.6s ease-out 0.3s forwards;
}
.footer-stat-item:nth-child(4) {
  animation: fadeInUp 0.6s ease-out 0.4s forwards;
}
</style>
