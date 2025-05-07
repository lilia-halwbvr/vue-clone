<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import HeroSection from '@/components/MainSection/HeroSection.vue'
import SiteMap from '@/components/MainSection/SiteMap.vue'
import SpecialSponsor from '@/components/MainSection/SpecialSponsor.vue'
import SponsorsSection from '@/components/MainSection/SponsorsSection.vue'
</script>

<template>
  <Header />

    <HeroSection />
    <SpecialSponsor />
    <SponsorsSection />
    <SiteMap />

  <Footer />
</template>




<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
main {
  width: 100%;
  margin: 0;
  padding: 0;
}


</style>
