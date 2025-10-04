<template>
  <section class="team">
    <div class="team-container">
      <div class="team-header">
        <h2 class="team-title">{{ team.title }}</h2>
        <p class="team-subtitle">{{ team.subtitle }}</p>
      </div>

      <div class="team-grid">
        <div
          v-for="member in team.members"
          :key="member.id"
          class="team-member"
          @mouseenter="handleMemberHover"
          @mouseleave="handleMemberLeave"
        >
          <div class="member-avatar">
            <div class="avatar-icon">{{ getInitials(member.name) }}</div>
          </div>
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-role">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TeamProps } from "../types";

defineProps<TeamProps>();

const getInitials = (name: string): string => {
  return name.charAt(0).toUpperCase();
};

const handleMemberHover = (event: Event) => {
  const member = event.currentTarget as HTMLElement;
  member.style.transform = "translateY(-8px)";
  member.style.boxShadow = "0 20px 40px rgba(0, 255, 136, 0.2)";
};

const handleMemberLeave = (event: Event) => {
  const member = event.currentTarget as HTMLElement;
  member.style.transform = "translateY(0)";
  member.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
};
</script>

<style scoped>
.team {
  padding: var(--spacing-3xl) 0;
  background: var(--primary-bg);
}

.team-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.team-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.team-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--accent-green), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.team-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-2xl);
}

.team-member {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.team-member::before {
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

.team-member:hover::before {
  transform: scaleX(1);
}

.member-avatar {
  margin-bottom: var(--spacing-lg);
}

.avatar-icon {
  width: 80px;
  height: 80px;
  background: var(--accent-green-glow);
  border: 2px solid var(--accent-green);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-green);
  margin: 0 auto;
  transition: all 0.3s ease;
}

.team-member:hover .avatar-icon {
  background: var(--accent-green);
  color: var(--primary-bg);
  box-shadow: var(--shadow-green);
  transform: scale(1.1);
}

.member-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  line-height: 1.3;
}

.member-role {
  color: var(--accent-green);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .team-title {
    font-size: 2rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .team-member {
    padding: var(--spacing-lg);
  }

  .avatar-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .member-name {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .team-container {
    padding: 0 var(--spacing-sm);
  }

  .team-title {
    font-size: 1.75rem;
  }

  .team-subtitle {
    font-size: 1rem;
  }
}
</style>
