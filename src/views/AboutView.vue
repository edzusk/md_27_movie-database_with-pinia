<script lang="ts" >
export default {
  name: 'AboutView',
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<template>
  <div >
    <h1>This {{ id }} page</h1>
  </div>
</template>

<style>

</style>
