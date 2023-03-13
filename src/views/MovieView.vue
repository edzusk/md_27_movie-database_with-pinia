<script  lang="ts">
import { onMounted } from 'vue';
import MovieCard2 from '@/components/MovieCard2.vue';
import ThePaginator from '../components/ThePaginator.vue';
import { useMovieStore } from '../stores/movieStore'
export default {
    components: {
      ThePaginator,
      MovieCard2,
    },
    setup() {
        const movieStore = useMovieStore();
        onMounted(() => {
            movieStore.getMovies(movieStore.movieTitle);
        });
        const handleShowMovieById = (id: string) => {

            movieStore.getMovieById(id);
        };
        return { movieStore, handleShowMovieById };
    },
}
</script>

<template>
  <main class="content">
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
    <ThePaginator :onPrev="movieStore.previousPage" :onNext="movieStore.nextPage" :lastPage="movieStore.totalPages" :currentPage="movieStore.currentPage"/>
  </footer>
</template>

