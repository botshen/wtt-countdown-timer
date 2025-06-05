<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const props = defineProps<{
  targetDate: string; // Format: "YYYY-MM-DD"
  eventName?: string;
  venue?: string;
}>();

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const timeRemaining = ref<TimeRemaining>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const isExpired = ref(false);
let interval: number | null = null;

const updateCountdown = () => {
  const now = new Date();
  const target = new Date(props.targetDate);
  target.setHours(0, 0, 0, 0); // Set to midnight of the target date
  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    isExpired.value = true;
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
    return;
  }

  timeRemaining.value = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

const formattedDate = computed(() => {
  const date = new Date(props.targetDate);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

onMounted(() => {
  updateCountdown();
  interval = window.setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  if (interval !== null) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div class="countdown-container">
    <h3 v-if="props.eventName" class="text-lg font-semibold text-white">
      {{ props.eventName }}
    </h3>
    <p v-if="props.venue" class="text-sm text-gray-300">{{ props.venue }}</p>
    <p class="text-sm text-gray-300 font-medium">{{ formattedDate }}</p>
    <div v-if="!isExpired" class="flex space-x-2 mt-1">
      <div class="countdown-box">
        <span class="countdown-number">{{ timeRemaining.days }}</span>
        <span class="countdown-label">d</span>
      </div>
      <div class="countdown-box">
        <span class="countdown-number">{{ timeRemaining.hours }}</span>
        <span class="countdown-label">h</span>
      </div>
      <div class="countdown-box">
        <span class="countdown-number">{{ timeRemaining.minutes }}</span>
        <span class="countdown-label">m</span>
      </div>
      <div class="countdown-box">
        <span class="countdown-number">{{ timeRemaining.seconds }}</span>
        <span class="countdown-label">s</span>
      </div>
    </div>
    <p v-else class="text-sm font-medium text-red-400">Event has started!</p>
  </div>
</template>

<style>
.countdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 4px 8px;
  min-width: 48px;
}

.countdown-number {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}

.countdown-label {
  font-size: 12px;
  color: #cbd5e1;
}
</style>
