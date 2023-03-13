<script setup lang="ts">
defineProps<{
  isLoading: boolean,
}>()
</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
</template>