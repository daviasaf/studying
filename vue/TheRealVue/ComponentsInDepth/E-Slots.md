- Não esqueça de colocar os valores padrões dos slots
- slots recebem name para se localizar
- slots sem name recebe o nome default
- para direcioanr o pai pro slot utilize o v-slot ou o shorthand #

#### slots condicionais

- voce pode usar $slots para fazer condições especificas
- combine com o v-if

  - <\div v-if="$slots.header"> tal tal tal

- você pode colocar nomes dinamicos no v-slot tbm

```html
v-slot:[nomeReativo] #[nomeReativo]
```

```html
<!-- PAI -->
<Cards #header>
  {{ #header.text }}
<Cards>
<!-- Filho -->
<div>

    <slot name="header"  :text="Olá" ></slot>

</div>
```

- use template para direcionar o conteudo

- Quando você manda o template, você pode mandar um valor no v-slot, da seguinte forma
    - v-slot="{name,user}"
- quando você passa isso, significa que no slot que você vai mandar esses dados, você vai conseguir trabalhar com esses dados daqui, por exemplo

```html
<Cards>

    <template #header="{name,user}">
        <p>Seu nome é {{name}} e seu user é {{user}} </p>
    </template>

</Cards>
```
<template>
<slot #header :mensagem='mensagem' ></slot>
</template>
<script setup>
    import { ref } from 'vue';
    let mensagem = ref("Oi")
</script>
``` 

- ou seja, vc ta passando os dados aqui, mas ele vai ser acessado só la

