# Provide
- Para passar dados de uma pagina longe da outra, use provide function
```html
<script>
import {provide} from 'vue'
provide(name:"Davi",age:18)
</script>
```

- Provide function can receive two arguments, the first one are called injection key, and receive a string or symbol, the second one can receive every data type
```js
const count = ref(0)
provide('key', count)
```
- Para garantir que os dados que você passou não seja alterado, utilize a funçãi readonly(dadoPassado)
# Inject
- Para receber dados, use inject function
```js
const message = inject('message')
```
- declare tbm um valor default
```js
const message = inject('message','default value')
```

### Injection Key
- Use injection key na parte das chaves no provide
```js
// Componente 1
export default myInjectionKey = Symbol()
provide(myInjectionKey, {dados})

// Componente 2
import {myInjectionKey} from 'componente-1'
inject(myInjectionKey)
```
