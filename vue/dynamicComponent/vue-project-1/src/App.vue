<template>
  <h1>Consigo mudar o componente que vai aparecer</h1>
  <p>Basta mudar o valor dele apertando o botão abaixo</p>
  <button @click="toggleValue = !toggleValue">Mudar componente</button>
  <component :is="activateComp"></component>
</template>

<script>
export default{
  data(){
    return{
      toggleValue:true
    }
  },
  computed:{
    activateComp(){
      if(this.toggleValue){
        return "comp-one"
      }
      else{
        return "comp-two"
      }
    }
  }
}
</script>

<style scoped>

</style>