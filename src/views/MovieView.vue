<script  lang="ts">
import MovieCard2 from '@/components/MovieCard2.vue';
import ThePaginator from '../components/ThePaginator.vue';
import { useMovieStore } from '../stores/movieStore'
export default {
    components: {
      ThePaginator,
      MovieCard2,
    },
    data() {
      return {
        movieStore: useMovieStore()
      }
    },
    mounted() {
      this.movieStore.getMovies(this.movieStore.movieSearchFor)
    }
}
</script>

<template>

  <main v-if="!movieStore.isLoading" class="content">
    <div class="container">
      <div class="row">
        <MovieCard2 class="col-4"  v-for="movie in movieStore.movies"
        :key="movie.imdbID"
        :imdbID="movie.imdbID"
        :type="movie.Type"
        :year="movie.Year"
        :movieTitle="movie.Title" 
        :poster="movie.Poster" />
      </div>
    </div>
  </main>
  <footer class="footer">
    <ThePaginator v-if="!movieStore.isLoading" :onPrev="movieStore.previousPage" :onNext="movieStore.nextPage" :lastPage="movieStore.totalPages" :currentPage="movieStore.currentPage"/>
  </footer>
</template>

