<template>
  <h1>Consigo mudar o componente que vai aparecer</h1>
  <router-link to="/compone"></router-link>
  <router-link to="/comptwo"></router-link>
  <div>
    <router-view></router-view>
  </div>
  <!-- <component :is="activateComp"></component> -->
</template>

<script>
export default {
  // data(){
  //   return{
  //     toggleValue:true
  //   }
  // },
  // computed:{
  //   activateComp(){
  //     if(this.toggleValue){
  //       return "comp-one"
  //     }
  //     else{
  //       return "comp-two"
  //     }
  //   }
  // }
};
</script>

<style scoped>
a {
  display: inline-block;
  background-color: black;
  border: solid 1px black;
  color: white;
  padding: 5px;
  margin: 10px;
}
a:hover,
a.router-link-active {
  background-color: rgb(110, 79, 13);
}
div {
  border: dashed black 1px;
  padding: 20px;
  margin: 10px;
  display: inline-block;
}
</style>
