- Pelo que eu entendi, os componentes usam o export default, use o setup() para mexer
##### Proprs
- defineProps(['title','desc'])
    - utilize o defineProps no componente para pegar as propriedades do pai
    - ele nao precisa ser exportado (I doesn't understand so much), mas retorna um objeto, então usaremos assim
    ```js
    const props = defineProps(['title','desc'])
    console.log(props.title) 
    ```
- use v-for no componente pai
```html
    <Cards
    v-for="item in items"
    :key="item.id",
    :title="item.title"
    >
```
- para capturar alguma coisa do componente pro pai, voce tem que fazer a seguinte estrutura
- no componente
    - Usar a funçáo $emit para emitir o chamado
    - o valor do emit será o valor do atributo que precisamos pegar como um evento no pai
    - exemplo -> $emit("aumentar-texto")
- no pai
    - @aumentar-texto="função que será executada"

- Você pode usar o **defineEmits** dentro do script setup

#### Componentes dinamicos
- para trocar entre componentes, utilize a tag \<components><\components> com o atributo :is="nomeDoComponente"