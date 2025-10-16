- Podemos usar a função watch para ativar sempre que uma variável reativa mudar
- como parametro, recebe a variável que você quer observar, e uma função de callback, que recebe o novo valor da variável observada e o antigo valor
- o primeiro parametro na verdade pode ser diferentes tipos reativos de dados, como ref, um objeto reativo, uma função getter ou um array
- Fiz um código que recebe uma variável reativa e fica observando ela para trocar o valor do paragrafo

```html
<script setup>
import { ref, watch } from 'vue'

const question = ref("")
let x = ref("")
let resposta

watch(x,(newValue, oldValue)=>{
  resposta = `De ${oldValue} foi para ${newValue}`
})

</script>

<template>
  <input type="text" v-model.lazy="x"  ></input>
  <p>  {{resposta}} </p>
</template>
```

- Lembrando que o lazy atualiza a página só quando vem uma outra atualização sem ser a que vc está no momento
- Olhando uma função

```html
<script setup>
import { ref, reactive, watch } from 'vue'

let x = ref('')
let y = ref('')
let resposta


watch(
// Ele ta olhando uma função
//           ↓
  ()=>x.value + y.value,

//  ↓     e pega o valor dele
  (sum)=>{resposta = `${x.value} + ${y.value} = ${sum}`
})

</script>

<template>
  <input type="text" v-model.number="x"  ></input>
  <input type="text" v-model.number="y"  ></input>
  <p>  {{resposta}} </p>
</template>
```

- O watch ele recebe 2 paramentros, o que ele vai observar e o callback (que recebe o valor antigo e o valor novo)
- mas você pode passar cada valor dentro de um array, fazendo crescer bastante a funcionalidade, ex

```js
watch([x, y], ([newX, newY], [oldX, oldY]) => {
  console.log(`X era ${oldX} e agora é ${newX}`);
  console.log(`Y era ${oldY} e agora é ${newY}`);
});
```

- Pra você pegar o valor de um objeto, você tem que usar um getter

```js
//  pega o valor da contagem
//              ↓           ↓ e bota aqui como newValue
watch(
  () => y.contagem,
  (contagem) => {
    console.log(`A contagem está em ${contagem}`);
  }
);
```

- Podemos forçar o callback para ser executada imediatamente usando a opção

```js
{
  immediate: true;
}
```

- Ou seja, quando o código rodar, a callback já vai ter rodado também

```html
<script setup>
import { ref, reactive, watch } from 'vue'

let x = ref(0)
let y = ref(5)
let resposta


watch(
    // first param - value
  ()=>x.value + y.value,
  // second param - callback
  (sum)=>{resposta = `${x.value} + ${y.value} = ${sum}`
},
//      ↓
{immediate:true}
)

</script>

<template>
  <input type="text" v-model.number="x"  ></input>
  <input type="text" v-model.number="y"  ></input>
  <p>  {{resposta}} </p>
</template>
```

 - Se você quer que seja executada apenas uma vez, utilize a opção

```js
{
  once: true;
}
```
- use watchEffect para olhar um estado reativo sem precisar passar ele na source, ele irá ser atribuido como uma dependência automaticamente
- watchEffect(function) 
- nao precisa colocar immediate:true pois ele sempre vai atualizar sempre que sua dependencia dentro dele atualizar também

- Em exemplos pequenos, o watchEffect nao faz muito sentido, pois usando o watch voce consegue passar o parametro que voce vai usar facilmente, mas na medida que o projeto cresce, o watchEffect ajudará muito

- onWatcherCleanup
    - Em casos especificos com fetch, que uma requisição esta sendo feita e ainda nao chegou a resposta e o usuario mudar o url, voce pode cancelar a execução da função usando essa função callback
    - É aqui que vc vai colocar o controller.abort
- flush
    - escolha quando o watch vai ser renderizado
        - pre
            - antes
        - post
            - após
        - sync
            - imediatamente