<script setup>
import Navbar from './components/Navbar.vue'
import TabBar from './components/TabBar.vue'
</script>

<template>
  <Navbar />
  <main>
    <router-view v-slot="{Component}">
      <Transition name="fade" mode="out-in" >
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </router-view>
  </main>
  <TabBar />
</template>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
