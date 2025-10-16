<script setup>
let dados = ref("");

onMounted(async () => {
  try {
    dados.value = await $fetch("/api/tasks");
  } catch (error) {
    console.log(error);
  }
});

async function deleterDado(id) {
  await $fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });
}
</script>

<template>
  <div id="page">
    <div v-for="task in dados" :key="task.id">
      <CardTask>
        <template #nomeTarefa>
          <p>{{ task.name }}</p>
        </template>
        <template #buttonArea>
          <button><NuxtLink :to="`/users/${task.id}`">Ver</NuxtLink></button>
          <button @click="deleterDado(task.id)">Deletar</button>
        </template>
      </CardTask>
    </div>
  </div>
</template>

<style scoped>
#page {
  background-color: rgb(0, 49, 30);
  margin: 10px;
  color: white;
  display: flex;

  a {
    text-decoration: none;
  }
}
</style>
