<script lang="ts" setup>
import CountdownTimer from "@/components/CountdownTimer.vue";
import MatchList from "@/components/MatchList.vue";
import { tournamentsData } from "@/data/mockData";
</script>

<template>
  <div class="bg-[#1a2b4b] p-4">
    <CountdownTimer
      targetDate="2025-06-09 10:00:00"
      eventName="WTT Contender Skopje 2025"
      venue="Skopje, North Macedonia"
      class="w-[480px]"
    />
    <MatchList :tournaments="tournamentsData" />
  </div>
</template>
