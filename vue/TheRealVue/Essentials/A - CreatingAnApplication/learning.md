# Criando uma aplicação
npm create vue@latest
- Exportar
    - createApp
        - Dentro dele fica as configurações da raiz
    - O componente que você vai usar (de início, App)
- A aplicação só será lançada quando a função mount ser renderizada (passe o elemento html que você quer que a aplicação seja renderizada)
- O componente dentro do createApp será renderizado no elemento html específicado 
- Você pode criar várias aplicações na mesma página
    - const app1 = createApp({}).mount("container-1")
    - const app2 = createApp({}).mount("container-2")
    - etc...