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
  mounted() {
      this.getMovie() 
    }
  }
</script>

<template>
  <div v-if="!movieStore.isLoading" class="container">
    <div class="movie-card">
      <img :src="movieStore.movieById.Poster" alt="poster" class="movie-card__image">
      <div class="wrapper">
        <h2 class="movie-card__hedding">{{ movieStore.movieById.Title }}</h2>
        <span class="movie-info"> Released :  {{ movieStore.movieById.Released }}</span>
        <span class="movie-info"> Ganre :  {{ movieStore.movieById.Genre}}</span>
      </div>
    </div>
  </div>
</template>

<style>

</style>
