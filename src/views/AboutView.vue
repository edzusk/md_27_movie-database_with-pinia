<script lang="ts" >
import { useMovieStore } from '@/stores/movieStore';

export default {
  name: 'AboutView',
  computed: {
    id():string {
      return this.$route.params.id.toString();
    },
  },

  data() {
    return {
      movieStore: useMovieStore()
    }
  },
  methods: {
    getMovie() {
      this.movieStore.getMovieById(this.id)
    }
  },
  created() {
      this.getMovie() 
    }
  }
</script>

<template>
  <div >
    <h1>This {{ id }} page</h1>
    <h2>{{ movieStore.movieById.Title }}</h2>
  </div>
</template>

<style>

</style>
