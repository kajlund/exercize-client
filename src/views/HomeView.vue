<script setup>
import { ref } from 'vue';

import ActivityCard from '@/components/ActivityCard.vue';

const activities = ref([
  {
    id: "68f90685b3a2cc203afc5872",
    when: "2025-10-22T00:00:00.000Z",
    kind: "Outdoor walking",
    title: "Afternoon walk",
    description: "Nice walk in Hamnskogen",
    distance: 4.72,
    duration: 3391,
    elevation: 72,
    calories: 0,
    createdAt: "2025-10-22T16:29:57.159Z",
    updatedAt: "2025-10-22T16:29:57.159Z"
  }
])
</script>

<template>
  <section class="home">
    <ActivityCard v-for="a in activities" :key="a.id" :activity="a" />
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
