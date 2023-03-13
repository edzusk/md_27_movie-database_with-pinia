<script lang="ts">
    export default {
        props:{
            onNext: {
                type: Function,
                required: true
            },
            onPrev: {
                type: Function,
                required: true
            },
            currentPage: {
                type: Number,
                required: true,
            },
            lastPage: {
                type: Number,
                required: true
            }
           
        },
        methods:{
            isFirst(){
                return this.currentPage===1
            },
            isLast(){
                return this.currentPage === this.lastPage
            }
        }
    }

</script>

<template>
    <footer class="footer">

        <div class="container">
          <div class="buttonWrapper">
              <button @click="() => onPrev()" :disabled="isFirst()" class="button">previous</button>
              <button @click="($event) => onNext()" :aria-disabled="isLast()" class="button">Next</button>
          </div>
          <div class="location">
              {{ currentPage }} / {{ lastPage }}
          </div>
        </div>
    </footer>
</template>


<style>

.buttonWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    
}
.location {
    padding: 30px;
    background-color: var(--c-main);
    color: var(--c-secondary);
    font-size: 1.5rem;
    text-align: center;
}
</style>