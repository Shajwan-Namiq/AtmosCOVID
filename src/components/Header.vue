<template>
  <header class="header">
    <div class="header-container">
      <nav class="nav">
        <!-- Logo Section -->
        <div class="logo-section">
          <div class="logo">
            <div class="logo-icon">A</div>
            <span class="logo-text">AtmosCOVID</span>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navigation Links -->
        <div class="nav-links" :class="{ 'nav-links-open': mobileMenuOpen }">
          <a
            v-for="item in navigation"
            :key="item.id"
            :href="item.href"
            class="nav-link"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Search and Actions -->
        <div class="nav-actions" :class="{ 'nav-actions-open': mobileMenuOpen }">
          <!-- Search Bar -->
          <div class="search-container">
            <input
              type="text"
              :placeholder="searchBar.placeholder"
              class="search-input"
            />
            <span class="search-icon">{{ searchBar.icon }}</span>
          </div>

          <!-- User Actions -->
          <div class="user-actions">
            <a
              v-for="action in userActions"
              :key="action.id"
              :href="action.href"
              :class="[
                'user-action',
                action.type === 'button' ? 'btn' : 'user-link',
                action.variant === 'primary' ? 'btn-primary' : 'btn-secondary',
              ]"
            >
              {{ action.label }}
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { HeaderProps } from "../types";

defineProps<HeaderProps>();

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
.header {
  background: var(--primary-bg);
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-lg);
}

.logo-section {
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
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

.nav-links {
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

.nav-actions {
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
  font-size: var(--font-size-sm);
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
  font-size: var(--font-size-sm);
}

.user-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.user-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.user-link:hover {
  color: var(--accent-green);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav {
    flex-wrap: wrap;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: var(--spacing-md);
  }

  .search-input {
    min-width: 150px;
  }
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .nav-links {
    order: 0;
    width: auto;
    margin: 0;
  }

  .nav-actions {
    flex-direction: column;
    width: 100%;
    gap: var(--spacing-sm);
  }

  .search-input {
    width: 100%;
    min-width: auto;
  }

  .user-actions {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: var(--font-size-lg);
  }

  .logo-icon {
    width: 32px;
    height: 32px;
    font-size: var(--font-size-lg);
  }

  .nav-links {
    gap: var(--spacing-md);
  }

  .nav-link {
    font-size: var(--font-size-sm);
  }
}
</style>
