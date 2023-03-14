<script  lang="ts">
import { RouterView } from 'vue-router'
import { useMovieStore } from './stores/movieStore'

import SearchBar from './components/SearchBar.vue';
import TheError from './components/TheError.vue';
import TheLoading from './components/TheLoading.vue';

export default {
    components: {
      SearchBar,
      RouterView,
      TheError,
      TheLoading,
    },

    data() {
      return {
        movieStore: useMovieStore()
      }
    },
    methods: {
      handleSearch(searchValue: string) {
          this.movieStore.resetPage();
          this.movieStore.getMovies(searchValue);
        }
    }
    
}


</script>

<template>
  <header>
    <div class="wrapper">
      <SearchBar :onSubmit="handleSearch"/>
    </div>
  </header>
  <TheLoading v-if="movieStore.isLoading"/>
  <TheError v-if="movieStore.isError" :errorMesage="movieStore.errorMessage" />
  <RouterView/>
</template>

<style scoped>
.wrapper {
  display: flex;
  padding: 30px;
  justify-content: space-around;
  background-color: var(--c-main);
}
</style>
