<template>
  <li>
    <span>{{ assignment.name }}</span>
    <input type="checkbox" v-model="assignment.complete" />
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  assignment: { id: number; name: string; complete: boolean }
}>()
</script>

<style scoped>
input[type='checkbox'] {
  accent-color: rgba(237, 185, 224, 1);
  transform: scale(1.2);
  margin-left: 0.5rem;
}
</style>

