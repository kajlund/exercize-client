<script setup>
defineProps({
  activity: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div class="activity-card">
    <h2>{{ activity.title }}</h2>
    <span>{{ activity.when }}</span>
  </div>
</template>

<style scoped>
.activity-card {
  background-color: #fff;;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.activity-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.activity-card h2 {
  font-size: 2rem;
  color: #f0a500;
}
</style>
