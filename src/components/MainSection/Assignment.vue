<script setup lang="ts">
const props = defineProps<{
  assignment: { id: number; name: string; description: string; complete: boolean }
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()
</script>

<template>
  <li class="assignment">
    <div class="text">
      <span :class="{ done: assignment.complete }">{{ assignment.name }}</span>
      <p v-if="assignment.description" class="description" :class="{ done: assignment.complete }">{{ assignment.description }}</p>
    </div>
    <input type="checkbox" v-model="assignment.complete" />
    <button @click="$emit('delete', assignment.id)">❌</button>
  </li>
</template>

<style scoped>
.assignment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: 700;
}

.description {
  font-size: 0.9rem;
  color: #eee;
  margin-top: 0.25rem;
  font-weight: 500;
}

input[type='checkbox'] {
  accent-color: rgba(237, 185, 224, 1);
  transform: scale(1.2);
  margin-left: 0.5rem;
}

.done {
  text-decoration: line-through;
  color: #dadada;
  opacity: 0.8;
}

button {
  background: transparent;
  border: none;
  width: 15px;
  cursor: pointer;
  padding: 0;
}

</style>

