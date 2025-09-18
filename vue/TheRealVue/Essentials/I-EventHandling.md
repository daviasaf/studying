- Podemos usar o v-on ou seu shorthand @ para capturar eventos DOM
- inline handlers - É usado em situações simples, como por exemplo

  ```html
  <script setup>
    import { ref } from "vue";
    const count = ref(0);
  </script>
  <template>
    <button @click="count++">{{count}}</button>
  </template>
  ```

- Podemos chamar funções ou pelo caminho dela ou pelo nome do method, um exemplo

```html
<script setup>
  import { ref } from "vue";
  function message(msg) {
    alert(msg);
  }
</script>
<template>
  <button @click="message('Olá')">Say "Olá"</button>
  <button @click="message('Oi')">Say "Oi"</button>
</template>
```

- Para passar o próprio evento para o método, utilize a variavel especial $event dentro do método que você passou pro evento##

## Event modifiers
- Você pode passar vários modificados de eventos 
  - prevent
  - once
  - keyup
- Está é só uma lista de exemplos
- .exact modifier
  - faz com que o evento só será disparado se nenhum outra estiver acontecendo no momento

## mouse modifiers
  - left
  - right
  - middle