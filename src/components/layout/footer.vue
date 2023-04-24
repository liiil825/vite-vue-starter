<script setup lang="ts">
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()
</script>

<template>
  <footer v-if="!layoutStore.hidden">
    <p>&copy; 2023</p>
  </footer>
</template>

<style>
/* Style for the footer */
footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
