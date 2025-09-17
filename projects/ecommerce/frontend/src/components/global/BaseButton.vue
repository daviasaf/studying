<template>
    <button> <slot></slot> </button>
</template>

<script setup>
</script>

<style scoped lang="scss">
@use "../../styles/abstracts/variables";
button{
    background-color: variables.$cor-principal;
    border:none;
    transition: 0.2s;
    border-radius: 5px;
    &:hover{
        background-color: variables.$cor-texto;
        color: variables.$cor-secundaria;
    }
}
</style>