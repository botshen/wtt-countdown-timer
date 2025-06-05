<script lang="ts" setup>
import TournamentDetail from "@/components/TournamentDetail.vue";
import { tournamentsData } from "@/data/mockData";
</script>

<template>
  <TournamentDetail :tournament="tournamentsData[0]" />
</template>
