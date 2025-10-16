- Um componente pode emitir um evento usando o emit
```html
    <button @click='$emit('algumEvento')' >  Enviar</button>
```
- e o pai consegue captura-lo
```html
    <Cards @some-event="callback"  />
```

- Como props, tambem tem essa transição de nomes, enviamos com camelCase e ela tem que ser convertida para kebab-case

```html

<script setup>
import { ref } from 'vue'
import Comp from './Comp.vue';

const pixel = ref(14)
</script>

<template>
  <Comp @aumentar-numero='(n)=>pixel += n ' />
  <p :style="{ fontSize:pixel + 'px'}" > Tenho {{pixel}} pixels </p>
</template>

```

- usando o defineEmits
```html
<!-- Pai -->
<script setup>
import { ref } from 'vue'
import Comp from './Comp.vue';
const pixel = ref(14)
</script>
<template>
  <Comp @aumentar-numero='(n)=>pixel += n ' />
  <p :style="{ fontSize:pixel + 'px'}" > Tenho {{pixel}} pixels </p>
</template>

```
```html
<!-- Componente -->
<script setup>
const emit = defineEmits(["aumentar-numero"])
function aumentarNumero(){
  emit('aumentar-numero',1)
}
</script>
<template>
<button @click="aumentarNumero" > Aumentar </button>
</template>

```
- exemplo bom de validação que ainda quero fazer
```html
<script setup>
const emit = defineEmits({
  // No validation
  click: null,

  // Validate submit event
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email, password) {
  emit('submit', { email, password })
}
</script>
```