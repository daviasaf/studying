- Dentro do defineProps, utilize certas configurações  para ajustar sua propriedade
    - type
    - default
    - required
    - function
        - funções dentro do defineProperties cannot acess other variables declared in script setup
        - no type, voce pode fazer um array de types, tipo [String, null] e ai, se satisfazer alguma dos parametros, irá passar
#### desestruturação 
```js
const { card } = defineProps(["card","footer"])
```
- para passar uma props para um watch, devemos usar um getter na função, como uma reative
- props are read-only
- casos especificos voce deve modificar o props, pois vai acabar alterando o pai, se vc quer passar um dado pra ele, use o emit