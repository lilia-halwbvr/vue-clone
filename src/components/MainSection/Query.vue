<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) throw new Error(`noooooooo errorree ${response.status}`)
  return response.json()
}
const { data, isLoading, isError, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
})
</script>
<template>
  <div class="list-container">
    <h2 class="list-status">
      <template v-if="isLoading">List is loading... we are waiting</template>
      <template v-else-if="isError">ERRORE: {{ error.message }}</template>
      <template v-else>List loaded</template>
    </h2>
    <ul class="list">
      <li v-for="user in data" :key="user.id" class="user">
        <strong>{{ user.name }}</strong> <br>
        <span>Username: {{ user.username }}</span> <br>
        <span>Email: {{ user.email }}</span> <br>
        <span>Phone: {{ user.phone }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-status {
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;
}

.list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.user {
  padding: 15px;
  min-width: 10%;
  background-color: #eeeeee;
  color: #333;
  flex-shrink: 1;
  flex-basis: 280px;
}
</style>
