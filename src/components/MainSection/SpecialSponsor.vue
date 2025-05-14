<script setup lang="ts">
import { characteristics } from '@/data.ts'
</script>
<template>
  <section class="special-sponsor">
    <span class="text text-container-left">
      Special Sponsor
    </span>
    <a
      href="https://www.monterail.com/services/vue-js-development?+utm_source=sponsorship&utm_medium=logo&utm_campaign=Vue"
    >
      <img
        class="image-container"
        src="https://automation.vuejs.org/images/monterail.svg"
        alt="Image"
      />
    </a>
    <span class="text text-container-right">
      Official Vue & Nuxt Partner
    </span>
  </section>

  <section class="char-container">
    <div v-for="(char, index) in characteristics" :key="index" class="char-item">
      <h3>{{ char.title }}</h3>
      <p class="char-p">{{ char.description }}</p>
    </div>
  </section>

</template>

<style scoped>
.special-sponsor {
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: 168px;
  height: 42px;
  margin: 0 10px;
}
:root:has(option[id="theme-system"]:checked) .image-container {
  filter: grayscale(1) invert(1);
}

.text {
  color: #adadad;
  font-size: 13px;
  font-weight: 600;
}

.char-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 0 auto;
  padding: 42px 32px;
  width: min(90%, 960px);
}

.char-p {
  margin: 10px 0;
  color: #7a7a7a;
}

.char-item {
  padding: 28px 36px;
}

@media (max-width: 768px) {
  .char-container {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 578px) {
  .special-sponsor {
    flex-direction: column;
  }
}
</style>


