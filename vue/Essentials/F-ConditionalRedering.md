- São diretivos com condicionais
    - v-if
        - mostra o elemento se for positivo
    - v-else
        - mostra o elemento se o v-if for negativo
    - v-else-if
        - fica no meio dos dois
- Se você quer mostrar mais de um elemento, utilize o v-if dentro da tag template

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```
- v-show
    - Recebe um valor booleano, se positivo, irá aparecer    