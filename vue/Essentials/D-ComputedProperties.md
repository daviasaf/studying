- Use computed property for complex logic using reactive data
- Computed faz com que certas operações não precisa ser realizadas todas vez que forem executadas
- Computed normalmente serve para getter, ou seja, para devolver o valor, terão casos raros que funcionará para setter
- Não faça no computed (getter)
  - mutate other state
  - async request
  - mutate DOM inside a computed getter
  - Não mude o retorno de uma função computed, pois ela é "temporária", faça ela read-only
  - Em vez de mudar ela, mude as referências delas
- Code 1

```html
<script setup>
  import { reactive, computed } from "vue";
  const author = reactive({
    name: "Davi",
    books: ["Vue1", "Vue3", "Vue3"],
  });

  const livrosPublicados = computed(() => {
    return author.books.length ? "Yes" : "No";
  });
</script>

<template>
  <p>{{livrosPublicados}}</p>
</template>
```

- Code 2

```html
<script setup>
  import { ref, computed } from "vue";
  const name1 = ref("Davi");
  const name2 = ref("Asaf");
  const fullName = computed({
    get() {
      return name1.value + " " + name2.value;
    },
    set(newValue) {
      [name1.value, name2.value] = newValue.split(" ");
    },
  });
  // O setter nessa situação vai ser pra quando acontecer um fullName = "Franciele Curvelo" por exemplo
</script>
<template>
  <p>{{fullName}}</p>
</template>
```
