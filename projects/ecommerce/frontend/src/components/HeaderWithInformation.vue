<template>
    <header>
        <div>
            <h1>Site</h1>
        </div>
        <div>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Contact</a>
        </div>
    </header>
</template>

<script>
export default{

}
</script>

<style scoped>
    header{
        width: 100%;
       background-color: #2F4F4F;
        color: #91a84c;
        display:flex;
        justify-content: space-between;
        padding: 20px 60px;
        align-items: center;
    }
    a{
        margin: 0 30px;
        text-decoration: none;
    }
</style>