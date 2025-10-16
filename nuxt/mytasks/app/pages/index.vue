<script setup>


let taskName = ref("");
let taskDescription = ref("");



</script>

<template>
  <ClientOnly fallback>
    <div id="wrapper">
      <WriteSide />
      <TaskSide />
    </div>
    <template #fallback>
      <LoadingPage />
    </template>
  </ClientOnly>
</template>

<style scoped lang="scss">
#wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #0f7e48;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
