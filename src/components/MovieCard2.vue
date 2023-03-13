<script lang="ts">
import router from '@/router';

export default {
     props: {
    movieTitle: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    imdbID: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick(id:string) {
      router.push(`/${id}`);
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="movieCard" @click="() => onClick(imdbID)">
      <img class="movieCard__image" :src=poster :alt="`poster of ${movieTitle}`">
        <div class="movieCard__text">
          <h3 class="movieCard__hedding">
            {{ movieTitle }}
          </h3>
          <span>released: {{ year }}</span>
          <span>{{ type }}</span>
        </div>
      </div>
    </div>
</template>

<style scoped>
*{
    box-sizing: border-box;
}
.wrapper{
  text-decoration: none;
    color: var(--c-main);
    padding: 10px;
}

  .movieCard{
    cursor: pointer;
    border: 5px solid var(--c-accent);
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    height: 100%;
    text-align: end;
  }
  .movieCard:hover{
    transition: 0.5s;
  background-color: var(--c-main);
  color: var(--c-secondary);
}
  .movieCard__text{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  }
  .movieCard__hedding {
    font-size: 1.1rem;
    font-weight: 700;
  }
  .movieCard__image {
    width: 50%;
  }
</style>
