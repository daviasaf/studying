<template>
    <header>
        <div>
            <h1><router-link to="/">ConnectCity</router-link></h1>
        </div>
        <div v-if="currentRouter.path !== '/login' && currentRouter.path !== '/register'">
            <router-link to="/login">Login</router-link>
        </div>
    </header>
</template>

<script setup>
import { useRoute } from "vue-router";
const currentRouter = useRoute()



</script>

<style scoped lang="scss">
    header{
        width: 100%;
       background-color: #2F4F4F;
        color: #91a84c;
        display:flex;
        justify-content: space-between;
        padding: 20px 0px;
        align-items: center;
    }
    a{
        margin: 0 30px;
        text-decoration: none;
        color: #91a84c;
        transition: 0.1s;
        &:hover{

            color: #c7e278;
        }
    }
</style>