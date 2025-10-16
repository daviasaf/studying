- V-for

## Com arrays

- Faz com que o elemento se repete tamanho do array passado

```html
<script setup>
  import { ref } from "vue";
  const items = ref([{ message: "Hello" }, { message: "Hi" }]);
</script>
<template>
  <p v-for="item in items">{{item.message}}</p>
  <!-- Hello -->
  <!-- Hi -->
</template>
```

- você pode receber outro valor além do "item", pode receber o index também

```html
<script setup>
  import { ref } from "vue";
  const items = ref([{ message: "Hello" }, { message: "Hi" }]);
</script>
<template>
  <p v-for="(item, index) in items">{{index}} - {{item.message}}</p>
  <!-- 0 - Hello -->
  <!-- 1 - Hi -->
</template>
```

- Farei a desestruturação do array passado, pegarei a mensagem direto

````html
<script setup>
  import { ref } from "vue";

  const items = ref([{ message: "Hello" }, { message: "Hi" }]);
</script>

<template>
  <p v-for="({message}, index) in items">{{index}} - {{message}}</p>
  <!-- 0 - Hello -->
  <!-- 1 - Hi -->
</template>
```html
````

## Com objetos

```html
<script setup>
  import { reactive } from "vue";

  const myObject = reactive({
    title: "How to do lists in Vue",
    author: "Jane Doe",
    publishedAt: "2016-04-10",
  });
</script>

<template>
  <p v-for="(value, key, index) in myObject">{{index}} - {{key}} - {{value}}</p>
  <!-- 
 0 - title - How to do lists in Vue
1 - author - Jane Doe
2 - publishedAt - 2016-04-10
 -->
</template>
```

## Com inteiros

- Você pode fazer repetir o for com números inteiros

```html
<div v-for="n in 10">{{ n }}</div>
<!-- Repetirá 10 vezes -->
```

- O n começa no 1

## Template

- Você pode usar o v-for no template, igual o v-if

## Key

- Utilize o atributo :key="algumValorDoObjeto" sempre que for usar v-for

## Filtrando array e mostrando

```html
<script setup>
  import { ref, computed } from "vue";
  const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const evenNumber = computed(() => {
    return numbers.value.filter((number) => number % 2 == 0);
  });
</script>

<template>
  <p v-for="value, index in evenNumber">{{index}} - {{value}}</p>
  <!-- 
    0 - 2
    1 - 4
    2 - 6
    3 - 8
    4 - 10
   -->
</template>
```
