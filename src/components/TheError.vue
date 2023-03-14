<script lang="ts">
export default {
    props: {
        errorMesage: {
            type: String,
            required: true,
        }
    }
}
</script>
<template>

    <div class="container">
        <h1>Something went wrong! </h1>
        <span>{{ errorMesage }}</span>
    </div>
    
</template>