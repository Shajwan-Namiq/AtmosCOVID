<template>
  <div id="app">
    <!-- Modern Responsive Website -->
    <div class="website-container">
      <!-- Header -->
      <header class="header">
        <div class="header-container">
          <div class="logo-section">
            <div class="logo-icon">A</div>
            <span class="logo-text">AtmosCOVID</span>
          </div>

          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav class="nav-menu" :class="{ 'nav-menu-open': mobileMenuOpen }">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Features</a>
          </nav>

          <div class="header-actions">
            <div class="search-container">
              <input
                type="text"
                placeholder="I am looking for..."
                class="search-input"
              />
              <span class="search-icon">🔍</span>
            </div>
            <a href="#" class="signup-btn">Sign Up</a>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <Hero :hero="websiteData.hero" />

      <!-- Services Section -->
      <section class="services">
        <div class="services-container">
          <div class="services-grid">
            <!-- Service 1 -->
            <div
              class="service-card"
              @mouseenter="handleCardHover"
              @mouseleave="handleCardLeave"
            >
              <div class="service-icon">
                <div class="icon-bg">🏢</div>
              </div>
              <h3 class="service-title">Virtual Environment Design</h3>
              <p class="service-description">
                Custom-designed 3D spaces for events, showrooms, virtual
                offices, and immersive experiences.
              </p>
              <a href="#" class="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>

            <!-- Service 2 -->
            <div
              class="service-card"
              @mouseenter="handleCardHover"
              @mouseleave="handleCardLeave"
            >
              <div class="service-icon">
                <div class="icon-bg">🌐</div>
              </div>
              <h3 class="service-title">Metaverse Development</h3>
              <p class="service-description">
                We build scalable metaverse platforms and integrate your brand
                into leading virtual ecosystems.
              </p>
              <a href="#" class="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>

            <!-- Service 3 -->
            <div
              class="service-card"
              @mouseenter="handleCardHover"
              @mouseleave="handleCardLeave"
            >
              <div class="service-icon">
                <div class="icon-bg">🥽</div>
              </div>
              <h3 class="service-title">VR/AR Experience Creation</h3>
              <p class="service-description">
                Interactive and immersive Virtual & Augmented Reality
                experiences for marketing, training, or engagement.
              </p>
              <a href="#" class="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <Team :team="websiteData.team" />

      <!-- Air Quality Section -->
      <AirQuality :airQuality="websiteData.airQuality" />

      <!-- Vegetation Response Section -->
      <VegetationResponse
        :vegetationResponse="websiteData.vegetationResponse"
      />

      <!-- Statistics Section -->
      <section class="statistics">
        <div class="stats-container">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-value">30.2K+</div>
              <div class="stat-label">Happy Clients</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">120+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">4.9/5</div>
              <div class="stat-label">Average Rating</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">82.1%</div>
              <div class="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <!-- Contact Info -->
            <div class="footer-section">
              <div class="footer-logo">
                <div class="logo-icon">V</div>
                <span class="logo-text">AtmosCOVID</span>
              </div>

              <div class="contact-info">
                <div class="contact-item">
                  <span class="contact-label">Email</span>
                  <a href="mailto:contact@AtmosCOVID.agency" class="contact-value"
                    >contact@AtmosCOVID.com</a
                  >
                </div>
                <div class="contact-item">
                  <span class="contact-label">Phone</span>
                  <a href="tel:+15551234567" class="contact-value"
                    >+1 (555) 123-4567</a
                  >
                </div>
                <div class="contact-item">
                  <span class="contact-label">Address</span>
                  <span class="contact-value"
                    >123 Virtual Street, Metaverse City, MV 12345</span
                  >
                </div>
              </div>
            </div>

            <!-- Footer Stats -->
            <div class="footer-section">
              <h3 class="footer-title">STATISTICS</h3>
              <h4 class="footer-headline">Step Into the Future.</h4>

              <div class="footer-stats">
                <div class="footer-stat-item">
                  <span class="footer-stat-value">30.2K+</span>
                  <span class="footer-stat-label">Happy Clients</span>
                </div>
                <div class="footer-stat-item">
                  <span class="footer-stat-value">120+</span>
                  <span class="footer-stat-label">Projects Delivered</span>
                </div>
                <div class="footer-stat-item">
                  <span class="footer-stat-value">4.9/5</span>
                  <span class="footer-stat-label">Average Rating</span>
                </div>
                <div class="footer-stat-item">
                  <span class="footer-stat-value">82.1%</span>
                  <span class="footer-stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="footer-copyright">
              © 2025 AtmosCOVID. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Hero from "./components/Hero.vue";
import Team from "./components/Team.vue";
import AirQuality from "./components/AirQuality.vue";
import VegetationResponse from "./components/VegetationResponse.vue";
import { websiteData } from "./data/websiteData";

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
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

console.log("Modern AtmosCOVID Agency website loaded successfully!");
</script>

<style>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Colors */
  --primary-bg: #0a0a0a;
  --secondary-bg: #1a1a1a;
  --card-bg: #1e1e1e;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --accent-green: #00ff88;
  --accent-green-dark: #00cc66;
  --accent-green-glow: rgba(0, 255, 136, 0.3);
  --border-color: #333333;

  /* Typography */
  --font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4);
  --shadow-green: 0 0 20px var(--accent-green-glow);

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
}

body {
  font-family: var(--font-family);
  background: var(--primary-bg);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

.website-container {
  min-height: 100vh;
  background: var(--primary-bg);
}

/* Header Styles */
.header {
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
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
  font-size: 1.25rem;
  box-shadow: var(--shadow-green);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Navigation */
.nav-menu {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--accent-green);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-green);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.search-container {
  position: relative;
}

.search-input {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  padding: var(--spacing-sm) var(--spacing-lg);
  padding-right: 40px;
  color: var(--text-primary);
  font-size: 0.875rem;
  min-width: 200px;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-green);
  box-shadow: 0 0 0 2px var(--accent-green-glow);
}

.search-input::placeholder {
  color: var(--text-secondary);
}

.search-icon {
  position: absolute;
  right: var(--spacing-sm);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.signup-btn {
  background: var(--accent-green);
  color: var(--primary-bg);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-green);
}

.signup-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 40px var(--accent-green-glow);
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-2xl);
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 180px;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(
    135deg,
    var(--accent-green),
    var(--accent-green-dark)
  );
  color: var(--primary-bg);
  box-shadow: var(--shadow-green);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 40px var(--accent-green-glow);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--accent-green);
}

.btn-secondary:hover {
  background: var(--accent-green-glow);
  border-color: var(--accent-green);
  color: var(--text-primary);
}

/* Services Section */
.services {
  padding: var(--spacing-3xl) 0;
  background: var(--secondary-bg);
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
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

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  margin-bottom: var(--spacing-lg);
}

.icon-bg {
  width: 80px;
  height: 80px;
  background: var(--accent-green-glow);
  border: 2px solid var(--accent-green);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.service-card:hover .icon-bg {
  background: var(--accent-green);
  box-shadow: var(--shadow-green);
  transform: scale(1.1);
}

.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

.service-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-xl);
  font-size: 0.875rem;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--accent-green);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  position: relative;
}

.service-link::after {
  content: "";
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

/* Statistics Section */
.statistics {
  padding: var(--spacing-3xl) 0;
  background: var(--primary-bg);
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
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

.stat-item:hover::before {
  transform: scaleX(1);
}

.stat-item:hover {
  border-color: var(--accent-green);
  box-shadow: var(--shadow-green);
  transform: translateY(-2px);
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-green);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Footer */
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

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
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

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.footer-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-sm);
}

.footer-headline {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: var(--spacing-xl);
}

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
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-value {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: var(--accent-green);
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
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent-green);
  margin-bottom: var(--spacing-xs);
}

.footer-stat-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: var(--spacing-lg);
  text-align: center;
}

.footer-copyright {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .header-container {
    flex-wrap: wrap;
  }

  .nav-menu {
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: var(--spacing-md);
  }

  .search-input {
    min-width: 150px;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-content {
    gap: var(--spacing-2xl);
  }
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--secondary-bg);
    flex-direction: column;
    padding: var(--spacing-md);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border-top: 1px solid var(--border-color);
  }

  .nav-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .header-actions {
    flex-direction: column;
    width: 100%;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-md);
  }

  .search-input {
    width: 100%;
    min-width: auto;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
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

  .footer-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0 var(--spacing-sm);
  }

  .hero-container {
    padding: 0 var(--spacing-sm);
  }

  .services-container,
  .stats-container,
  .footer-container {
    padding: 0 var(--spacing-sm);
  }

  .logo-text {
    font-size: 1.25rem;
  }

  .logo-icon {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .hero-content {
    padding: var(--spacing-2xl) 0;
  }

  .services-grid {
    gap: var(--spacing-md);
  }

  .service-card {
    padding: var(--spacing-lg);
  }

  .icon-bg {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-item {
    padding: var(--spacing-lg);
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .footer-stats {
    grid-template-columns: 1fr;
  }

  .footer-stat-item {
    padding: var(--spacing-md);
  }

  .footer-stat-value {
    font-size: 1rem;
  }
}

/* Scrollbar Styles */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--secondary-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--accent-green);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-green-dark);
}

/* Selection Styles */
::selection {
  background: var(--accent-green);
  color: var(--primary-bg);
}

::-moz-selection {
  background: var(--accent-green);
  color: var(--primary-bg);
}
</style>
