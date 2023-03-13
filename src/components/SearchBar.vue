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
    
    data() {
        return {
            searchValue: ref('')
        }
    },
    methods: {
        handleSubmit() {
            router.push('/');
        this.onSubmit(this.searchValue);
        this.searchValue = ''; // clear input field
        }
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