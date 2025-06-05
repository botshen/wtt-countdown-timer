<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-900 p-4">
    <div
      class="relative h-[460px] w-[744px] overflow-hidden rounded-2xl shadow-2xl"
    >
      <!-- Background Image with hover effect -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img
          src="@/assets/licensed-image.jpeg"
          alt="Background"
          class="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 h-full p-6">
        <!-- Main Content Area -->
        <div class="flex h-[340px] gap-6">
          <!-- Left Column -->
          <div class="flex-[3] space-y-6">
            <!-- Logo and Date -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img src="@/assets/wtt-logo.png" alt="WTT Logo" class="h-8" />
              </div>
              <div
                class="flex items-center space-x-2 text-white whitespace-nowrap"
              >
                <img
                  src="@/assets/mk.png"
                  :alt="tournament.country"
                  class="h-4 w-6"
                />
                <span class="text-base"
                  >{{ tournament.startDate }} - {{ tournament.endDate }}</span
                >
              </div>
            </div>

            <!-- Tournament Title -->
            <div class="space-y-3">
              <h1 class="text-4xl font-bold text-white leading-tight">
                {{ tournament.name }}
              </h1>
              <div class="text-lg text-white/80">
                {{ tournament.location }}, {{ tournament.country }}
              </div>
            </div>

            <!-- Prize Money -->
            <div class="mt-auto bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 class="text-xl font-semibold text-white mb-1">Prize Money</h3>
              <p class="text-lg text-white/80">{{ tournament.prizeMoney }}</p>
            </div>
          </div>

          <!-- Right Column -->
          <div class="flex-[2]">
            <div
              class="bg-black/40 backdrop-blur-sm rounded-lg p-3 h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
            >
              <div class="grid gap-2">
                <div
                  v-for="category in tournament.categories"
                  :key="category.code"
                  class="flex items-center justify-between p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium"
                    >
                      {{ category.code }}
                    </div>
                    <span class="text-white text-sm">{{ category.name }}</span>
                  </div>
                  <div
                    class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"
                  >
                    <span class="text-white text-xs">{{
                      category.code.slice(-2)
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Countdown Timer -->
        <div
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent"
        >
          <div class="px-4 py-5 mx-auto max-w-[600px]">
            <CountdownTimer :target-date="tournament.startDate" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tournament } from "@/data/mockData";
import CountdownTimer from "./CountdownTimer.vue";

const props = defineProps<{
  tournament: Tournament;
}>();
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}
</style>
