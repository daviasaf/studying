Use v-model para pegar o valor do input

- Tem essa coisa doida aqui do input checked, nao faço ideia onde usar, mas achei maneiro
- checkbox

```html
<script setup>
import { ref } from 'vue'

const nomes = ref([])
</script>

<template>
  <input type="checkbox"  value="Davi" v-model="nomes" >Davi</input>
  <input type="checkbox"  value="Asaf" v-model="nomes" >Asaf</input>
  <p> {{nomes}} </p>
</template>
```

- radio

```html

```

<script setup>
import { ref } from 'vue'

const picked = ref("")
</script>

<template>
  <input type="radio"  value="Davi" v-model="picked" >Davi</input>
  <input type="radio"  value="Asaf" v-model="picked" >Asaf</input>
  <p> {{picked}} </p>
</template>

- para usar o select option, coloque o v-model no select

- para radio, checkbox e select os valores normalmente são booleanos
- existe um atributo para o v-model que você escolhe o que vai aparecer se for true ou false

```html
<script setup>
  import { ref } from "vue";

  const toggle = ref("");
</script>

<template>
  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
  {{ toggle }}
</template>
```

### modificadores
 - lazy
    - atualiza o valor quando ouver outra atualização fora do seu input
 - number
    - Tranforma o valor do input em numero
 - trim
    - devolve o valor sem espaços