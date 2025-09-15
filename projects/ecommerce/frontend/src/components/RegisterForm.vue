<template>
    <form>
       <h1>Registro do usuário</h1>
        <div>
            <label for="name">Usuário</label>
            <input type="text" name="usuario"></input>
        </div>
        <div>
            <label for="name">Email</label>
            <input type="text" name="usuario"></input>
        </div>
        <div>
            <label for="email">Senha</label>
            <input type="text" name="senha"></input>
        </div>
        <div>
            <label for="email">Repita a senha</label>
            <input type="text" name="senha"></input>
        </div>
        <button>Enviar</button>
        <a href="/login">Já se registrou antes?</a>
    </form>
    
</template>

<script>
export default {

}
</script>

<style scoped>
form {
    margin: 100px 0;
    border-radius: 10px;
    background-color: #ffffff;
    border-top: 7px solid #ef7f4e;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px 70px 70px 70px 70px 30px 40px;
    padding: 10px;
}

form>div {
    display: flex;
    flex-flow: column;
}
input{
    border:1px solid #e96637;
    border-radius: 2px;
    padding: 7px;
}
input:focus{
  border: 3px solid #e96637;
  border-radius: 3px;
  outline: 0;
}

button {
    background-color:#ffc992 ;
    border: 1px solid #fab07b;
    transition: 0.3s;
}
button:hover {
    background-color:#f49865 ;
    border: 1px solid #fab07b;
}
a{
    text-decoration: none;
    color: #e96637;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
}
h1 {
  color: #ef7f4e;
  text-align: center;
  margin: 10px 0 0 0;
}
label{
  padding: 1px 0;
}
</style>