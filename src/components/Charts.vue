<template>
  <section class="charts">
    <div class="charts-container">
      <div class="charts-header">
        <h2 class="charts-title">{{ charts.title }}</h2>
        <p class="charts-subtitle">{{ charts.subtitle }}</p>
      </div>

      <div class="charts-grid">
        <div
          v-for="chart in charts.charts"
          :key="chart.id"
          class="chart-card"
          @mouseenter="handleCardHover"
          @mouseleave="handleCardLeave"
        >
          <div class="chart-header">
            <div class="city-info">
              <span class="city-flag">{{ chart.flag }}</span>
              <div class="city-details">
                <h3 class="city-name">{{ chart.name }}</h3>
                <p class="city-country">{{ chart.country }}</p>
                <div class="city-stats">
                  <span class="stat-value">{{ chart.maxValue }}</span>
                  <span class="stat-label">Max</span>
                  <span class="stat-separator">•</span>
                  <span class="stat-value">{{ chart.minValue }}</span>
                  <span class="stat-label">Min</span>
                </div>
              </div>
            </div>
          </div>

          <div class="chart-container">
            <div class="chart-wrapper">
              <div class="chart-area">
                <!-- Y-axis labels -->
                <div class="y-axis">
                  <div
                    v-for="tick in getYTicks(chart)"
                    :key="tick"
                    class="y-tick"
                    :style="{ bottom: getYPosition(tick, chart) + '%' }"
                  >
                    <span class="tick-label">{{ tick }}</span>
                  </div>
                </div>

                <!-- Chart content -->
                <div class="chart-content">
                  <!-- Lockdown period highlight -->
                  <div
                    class="lockdown-period"
                    :style="getLockdownStyle(chart)"
                  ></div>

                  <!-- Data line -->
                  <svg
                    class="chart-line"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      :d="getPathData(chart)"
                      class="data-path"
                      :class="getChartClass(chart.id)"
                    />
                  </svg>

                  <!-- Data points -->
                  <div
                    v-for="(point, index) in chart.data"
                    :key="index"
                    class="data-point"
                    :class="getPointClass(point, chart)"
                    :style="getPointStyle(point, index, chart)"
                    :title="`${point.month}: ${point.value} µg/m³`"
                  ></div>
                </div>

                <!-- X-axis labels -->
                <div class="x-axis">
                  <div
                    v-for="(point, index) in getXLabels(chart)"
                    :key="index"
                    class="x-tick"
                    :style="{ left: getXPosition(index, chart) + '%' }"
                  >
                    <span class="tick-label">{{ point.year }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Chart legend -->
            <div class="chart-legend">
              <div class="legend-item">
                <div class="legend-color lockdown"></div>
                <span class="legend-text">Lockdown Period</span>
              </div>
              <div class="legend-item">
                <div
                  class="legend-color data-line"
                  :class="getChartClass(chart.id)"
                ></div>
                <span class="legend-text">PM2.5 Levels</span>
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
import type { ChartsProps } from "../types";

defineProps<ChartsProps>();

const getYTicks = (chart: any) => {
  const range = chart.maxValue - chart.minValue;
  const step = Math.ceil(range / 4);
  const ticks = [];
  for (let i = chart.minValue; i <= chart.maxValue; i += step) {
    ticks.push(i);
  }
  return ticks;
};

const getYPosition = (value: number, chart: any) => {
  const range = chart.maxValue - chart.minValue;
  return ((value - chart.minValue) / range) * 100;
};

const getXLabels = (chart: any) => {
  const labels = [];
  for (let i = 0; i < chart.data.length; i += 12) {
    labels.push(chart.data[i]);
  }
  return labels;
};

const getXPosition = (index: number, chart: any) => {
  const totalPoints = Math.ceil(chart.data.length / 12);
  return (index / (totalPoints - 1)) * 100;
};

const getPathData = (chart: any) => {
  let path = "";
  chart.data.forEach((point: any, index: number) => {
    const x = (index / (chart.data.length - 1)) * 100;
    const y = 100 - getYPosition(point.value, chart);
    if (index === 0) {
      path += `M ${x} ${y}`;
    } else {
      path += ` L ${x} ${y}`;
    }
  });
  return path;
};

const getPointStyle = (point: any, index: number, chart: any) => {
  const x = (index / (chart.data.length - 1)) * 100;
  const y = 100 - getYPosition(point.value, chart);
  return {
    left: `${x}%`,
    bottom: `${y}%`,
  };
};

const getPointClass = (point: any, chart: any) => {
  const isLockdown = isInLockdownPeriod(point.month, chart);
  return {
    "lockdown-point": isLockdown,
    "normal-point": !isLockdown,
  };
};

const isInLockdownPeriod = (month: string, chart: any) => {
  return (
    month >= chart.lockdownPeriod.start && month <= chart.lockdownPeriod.end
  );
};

const getLockdownStyle = (chart: any) => {
  const startIndex = chart.data.findIndex(
    (d: any) => d.month === chart.lockdownPeriod.start
  );
  const endIndex = chart.data.findIndex(
    (d: any) => d.month === chart.lockdownPeriod.end
  );

  if (startIndex === -1 || endIndex === -1) return {};

  const startX = (startIndex / (chart.data.length - 1)) * 100;
  const endX = (endIndex / (chart.data.length - 1)) * 100;
  const width = endX - startX;

  return {
    left: `${startX}%`,
    width: `${width}%`,
  };
};

const getChartClass = (chartId: string) => {
  const classes = {
    delhi: "chart-delhi",
    beijing: "chart-beijing",
    "los-angeles": "chart-la",
  };
  return classes[chartId as keyof typeof classes] || "chart-default";
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
.charts {
  padding: var(--spacing-3xl) 0;
  background: var(--primary-bg);
}

.charts-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.charts-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.charts-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--accent-green), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.charts-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-2xl);
}

.chart-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.chart-card::before {
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

.chart-card:hover::before {
  transform: scaleX(1);
}

.chart-header {
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.city-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.city-flag {
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

.city-details {
  display: flex;
  flex-direction: column;
}

.city-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.city-country {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

.city-stats {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-xs);
}

.stat-separator {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0 var(--spacing-xs);
}

.stat-value {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--accent-green);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.chart-container {
  position: relative;
}

.chart-wrapper {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.chart-area {
  position: relative;
  height: 200px;
  width: 100%;
}

.y-axis {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40px;
}

.y-tick {
  position: absolute;
  left: 0;
  transform: translateY(50%);
}

.tick-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.chart-content {
  position: absolute;
  left: 50px;
  right: 0;
  top: 0;
  bottom: 20px;
}

.lockdown-period {
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgba(255, 107, 107, 0.1);
  border-left: 2px solid #ff6b6b;
  border-right: 2px solid #ff6b6b;
}

.chart-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.data-path {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.chart-delhi {
  stroke: #ff6b6b;
}

.chart-beijing {
  stroke: #4ecdc4;
}

.chart-la {
  stroke: #45b7d1;
}

.data-point {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  transform: translate(-50%, 50%);
  transition: all 0.3s ease;
}

.data-point:hover {
  width: 10px;
  height: 10px;
  transform: translate(-50%, 50%);
}

.lockdown-point {
  background: #ff6b6b;
  box-shadow: 0 0 8px rgba(255, 107, 107, 0.5);
}

.normal-point {
  background: var(--accent-green);
  box-shadow: 0 0 8px var(--accent-green-glow);
}

.x-axis {
  position: absolute;
  bottom: 0;
  left: 50px;
  right: 0;
  height: 20px;
}

.x-tick {
  position: absolute;
  transform: translateX(-50%);
}

.chart-legend {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.legend-color.lockdown {
  background: #ff6b6b;
}

.legend-color.data-line.chart-delhi {
  background: #ff6b6b;
}

.legend-color.data-line.chart-beijing {
  background: #4ecdc4;
}

.legend-color.data-line.chart-la {
  background: #45b7d1;
}

.legend-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .charts-title {
    font-size: 2rem;
  }

  .charts-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .chart-card {
    padding: var(--spacing-lg);
  }

  .city-info {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }

  .chart-area {
    height: 150px;
  }

  .city-flag {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
  }

  .city-name {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .charts-container {
    padding: 0 var(--spacing-sm);
  }

  .charts-title {
    font-size: 1.75rem;
  }

  .charts-subtitle {
    font-size: 1rem;
  }

  .chart-card {
    padding: var(--spacing-md);
  }

  .chart-area {
    height: 120px;
  }

  .y-axis {
    width: 30px;
  }

  .chart-content {
    left: 30px;
  }

  .x-axis {
    left: 30px;
  }

  .tick-label {
    font-size: 0.625rem;
  }
}
</style>
