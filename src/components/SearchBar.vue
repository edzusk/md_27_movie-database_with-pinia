<script lang="ts">
import { ref } from 'vue';
import router from '../router'
export default {

    props: {
        onSubmit: {
            type: Function,
            props:{
                searchValue: String,
            },
            required: true
        }
    },
    
    setup(props) {
    const searchValue = ref('');

    const handleSubmit = () => {
        router.push('/');
        props.onSubmit(searchValue.value);
        searchValue.value = ''; // clear input field
    };

    return {
      searchValue,
      handleSubmit
    };
  }

}

</script>

<template>

<form class="searchForm" @submit.prevent="() => handleSubmit()" action="">
    <input class="input" v-model="searchValue"  type="text" placeholder="GoodFellas...">
    <button class="button">Search</button>
</form>

</template>

<style>
.searchForm {
    display: flex;
    gap: 20px;
}
</style>