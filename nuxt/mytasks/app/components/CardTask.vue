<script setup>

</script>

<template>
  <div id="card">
    <div>
       <slot name="nomeTarefa"></slot> 
    </div>
    <div class="buttonArea">
        <slot name="buttonArea"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
    #card{
        margin: 10px;
        background-color: rgb(29, 165, 90);
        width: 200px;
        height: 100px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    
        .buttonArea{
            display: flex;
            justify-content: space-around;

            button{
                background-color: red;
            }
        }
    }
</style>