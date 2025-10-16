- Você pode declarar class or id reativo com v-bind

### Com objetos

- Recebendo atributo em formato de objeto no html

  ```html
  <script>
    const isSucess = ref(false);
    const hasError = ref(true);
  </script>

  <template>
    <p :class="{sucess:IsSucess, danger:hasError}">MinhaClasse é danger</p>
  </template>
  ```

- Porém, você também pode receber um objeto reativo completo

  ```html
  <script setup>
    import { ref, reactive } from "vue";
    const classObject = reactive({
      sucess: true,
      danger: true,
    });
  </script>

  <template>
    <div :class="classObject">Minha classe é danger e sucess</div>
  </template>
  ```

- Podemos bind com uma computed property que retorna um objeto
  ```js
  const isSucess = ref(true);
  const hasError = ref(null);
  const classObject = computed(() => {
    sucess: isSucess.value && !hasError.value;
    error: hasError.value && hasError.value.type == "fatal";
  });
  ```

### Com array

```html
<script setup>
  import { ref, computed } from "vue";
  const sucesso = ref("sucesso-class");
  const erro = ref("erro-class");
</script>

<template>
  <div :class="[sucesso, erro]">A</div>
</template>
```

- Com operador ternária

````html
<script setup>
  import { ref, computed } from "vue";
  const IsLogged = ref(true);
  const sucesso = ref("sucesso-class");
  const erro = ref("erro-class");
</script>

<template>
  <div :class="[IsLogged?sucesso:erro]">Estou logado!</div>
</template>
```
````

### Componentes e estilos

- Se você declara uma classe no componente pai e ele tiver um parágrafo, por exemplo
  - \<ComponentePai class="atributo-1">
- Esse atributo passará para o filho
  - \<h1 class="atributo-1" >Sou o filho e sou um H1\</h1>
  - \<p class="atributo-1" >Sou o filho e sou um P\</p>
- Se você quer escolher qual filho quer receber a classe do pai, utilize a propriedade de componente **$attrs**
  - \<h1 class="$attrs.class" >Sou o filho e sou um H1\</h1>
- Então, ficara assim

```html
<ComponentePai class="atributo-1">
  <h1 class="$atributo-1">Sou o filho e sou um H1</h1>
  <p class="">Sou o filho e sou um P</p></ComponentePai
>
```

- Binding inline styles

```html
<script setup>
  import { ref, reactive } from "vue";

  const classColors = reactive({
    color: "red",
    backgroundColor: "blue",
  });
</script>

<template>
  <div :style="classColors">Minha cor é vermelha com background azul</div>
</template>
```
- Também tem como fazer assim
```html
<script setup>
  import { ref, reactive } from "vue";

  const classColors = reactive({
    color: "red",
    fontSize:16px
  });
</script>

<template>
  <div :style="{'font-size' : fonSize + 'px'}">Meu tamanho é 16px</div>
</template>
```
- Você pode fornecer um array com multiplos valores de estilo
```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
- Nesse caso, irá renderizar o display flex para navegadores que suporta a versão sem prefixo do flexbox