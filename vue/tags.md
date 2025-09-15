# Hooks
### all the lifecycle hooks

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount
- unmounted
- errorCaptured
- renderTracked
- renderTriggered
- activated
- deactivated
- serverPrefetch

###### beforeCreate

- É executado antes do componente ser inicializado, ou seja, antes de tudo
- Não tente pegar valores como dados ou metodos pois eles não chegaram ainda
- Não mexa no DOM pois o componente até o componente ser **mounted**

###### created

- Acontece depois que o componente é inicializado, ou seja, os dados, watchers, prop, tudo já chegou
- Não mexa no DOM pois o componente até o componente ser **mounted**
- Pode ser usado para fetch ou para valores iniciais

###### beforeMount
- Acontece antes do component ser montado, ou seja, antes de ser adicionado no DOM
- Não mexa no DOM pois o componente até o componente ser **mounted**

###### mounted
- Depois do component ser adicionado no DOM, a função mounted é chamado
- Aqui podemos mexer com o dom
- A função mounted é executada sempre depois que o componente é adicionada no DOM

###### beforeUpdate
- Acontece antes do update hook
- É bom usar para evitar um loop infinito

###### update
- É chamado quando o componente é atualizado no DOM
- Não modifique a página com essa função, pois pode causar um loop infinito

###### beforeUnmount
- É chamado antes de um componente ser removido do DOM

###### unmounted
- É chamado depois que um componente é removido do DOM
- Pode ser usado para remove event listeners 

###### errorCaptured
- É chamado quando um erro acontece em uma crinaça ou um descendente
- Pode se capturar as informações do erro
    - o erro
    - o componente que gerou o erro
    - o tipo do erro
    - receba-os como parametros na funcao erroCaptured
        - erroCaptured(error, componenteErrado, errorInfo)

###### serverPrefetch
- Use para fazer fetch no server side

# Provide / Inject
- Em projetos maiores, o props acaba dificultando as coisas, pois ficar passando dados de pai para filho acaba sendo dificil, por isso, podemos passar os dados para uma função chamado provide() (provide -> return -> dados) e pegar ela de qualquer lugar usando o Inject (Inject: \[dados\])

# Router
- no main
    - import { createRouter,createWebHistory } from 'vue-router'
    - const router = createRouter({
        history:createWebHistory(),
        routes: [
            {path:'/compone',component:compOne},
            {path:'/comptwo',component:compTwo}
        ]})
    - app.use(router)
- router-link
- router-view