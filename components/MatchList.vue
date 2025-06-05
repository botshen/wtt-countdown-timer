<template>
  <div class="match-list p-4">
    <div v-if="loading" class="flex justify-center items-center py-8">
      <div
        class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"
      ></div>
    </div>

    <div v-else-if="error" class="text-red-400 text-center py-8">
      {{ error }}
    </div>

    <div
      v-else-if="tournaments.length === 0"
      class="text-gray-300 text-center py-8"
    >
      暂无赛事
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="tournament in tournaments"
        :key="tournament.id"
        class="tournament-item bg-[#243b63] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-[#334d7d]"
      >
        <div class="flex items-center justify-between mb-3">
          <div>
            <h3 class="text-lg font-semibold text-white">
              {{ tournament.name }}
            </h3>
            <p class="text-sm text-gray-300">{{ tournament.venue }}</p>
          </div>
          <div class="flex items-center">
            <span
              v-if="tournament.isLive"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/50 text-red-200"
            >
              <span
                class="w-2 h-2 bg-red-400 rounded-full mr-1.5 animate-pulse"
              ></span>
              直播中
            </span>
            <time class="text-sm text-gray-300 ml-3">{{
              formatDate(tournament.startDate)
            }}</time>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-3">
          <span
            v-for="player in tournament.players"
            :key="player"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200"
          >
            {{ player }}
          </span>
        </div>

        <div class="text-sm text-gray-300">
          <span class="inline-flex items-center">
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
            赛制: {{ tournament.format }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tournament {
  id: string;
  name: string;
  venue: string;
  startDate: string;
  players: string[];
  format: string;
  isLive?: boolean;
}

const props = withDefaults(
  defineProps<{
    loading?: boolean;
    error?: string;
    tournaments?: Tournament[];
  }>(),
  {
    loading: false,
    error: "",
    tournaments: () => [],
  }
);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
};
</script>

<style scoped>
.tournament-item {
  transition: all 0.3s ease;
}

.tournament-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
