- Ref
  - Use the ref stament to create a reactive reference
  - Importe ela para usar
  - syntax
    - const exemplo = ref(0)
    - agora exemplo tem o valor 0
- Reative
  - Existe outro jeito de fazer declarações reativas, com o reative()
  - Reative copia uma variavel como um objeto, mas apenas copia, não muda ele diretamente
  - reative recebe apenas valores de objetos, arrays, etc, mas nao recebe valores primitivos
  - Reactive é tipo uma conexão que você faz com uma variável ou objeto, sempre que mudar ela, o reativo vai mudar também
  - você pode perder essa conexão desestruturando ela
    - const state = reative({count:0})
    - const { count } = state
    - ↑ A conexão foi perdida ↑
- Recomendação
  - Use ref
- Caveat Unwrapped
  - Quando o ref é usada dentro de objeto ou dentro de uma função nativa, precisa usar o .value
  - Will be a good performace when the ref are top-level reference

```html
<script setup>
  import { reactive, ref } from "vue";
  let stateRef = ref(0);
  function incrementeStateRef() {
    stateRef.value++;
  }
  let stateReative = reactive({ count: 0 });
  function incrementeStateReative() {
    stateReative.count++;
  }
</script>

<template>
  <button @click="incrementeStateRef">+1</button>
  <button @click="incrementeStateReative">+1</button>
  <p>Ref - {{stateRef}}</p>
  <p>Ref - {{stateReative.count}}</p>
</template>
```
