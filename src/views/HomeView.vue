<script setup>
import { onMounted, ref } from 'vue';

import ActivityService from '@/services/ActivityServices.js';
import ActivityCard from '@/components/ActivityCard.vue';

const activities = ref(null);

onMounted(async () => {
  try {
    const response = await ActivityService.fetchActivities();
    console.log(response.data);
    activities.value = response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
  }
});
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
