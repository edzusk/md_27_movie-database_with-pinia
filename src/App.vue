<script  lang="ts">
import { RouterView } from 'vue-router'
import { useMovieStore } from './stores/movieStore'
  import { onMounted } from 'vue';

import SearchBar from './components/SearchBar.vue';
export default {
    components: {
      SearchBar,
      RouterView,
    },

    setup() {
        const {getMovies, resetPage, movieTitle} = useMovieStore();
        onMounted(() => {
            getMovies(movieTitle);
        });
        const handleSearch = (searchValue: string) => {
          resetPage();
          getMovies(searchValue);
        }
        return { handleSearch, resetPage, movieTitle};
    },
}


</script>

<template>
  <header>
    <div class="wrapper">
      <SearchBar :onSubmit="handleSearch"/>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.wrapper {
  display: flex;
  padding: 30px;
  justify-content: space-around;
  background-color: var(--c-main);
}
</style>
