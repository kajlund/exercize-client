<script setup>
import { onMounted, ref } from 'vue';
import ActivityService from '@/services/ActivityServices.js';

const props = defineProps({
  id: { type: String, required: true }
});

const activity = ref(null);

onMounted(async () => {
  try {
    const response = await ActivityService.fetchActivity(props.id);
    console.log(response.data);
    activity.value = response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
  }
});
</script>

<template>
  <section v-if="activity" class="detail">
  <h1>{{ activity.title }}</h1>
  <p>{{ activity.kind }}</p>
  <p>When: {{ activity.when }}</p>
  <p>{{ activity.description }}</p>
  <p>Duration {{ activity.duration }}</p>
  <p>Distance {{ activity.distance }} km</p>
  <p>Elevation: {{ activity.elevation }}</p>
  <p>Calories: {{ activity.calories }} kCal</p>
  </section>
</template>

<style>
.detail {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #39495c;
  border-radius: 1rem;
  text-align: start;
}
p {
  color: #39495c;
  font-size: 1.5rem;
  margin: 10px 0;
}
</style>
