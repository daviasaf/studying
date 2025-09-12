# Learning grid
O grid tem dois elementos principais, 
- O grid container e os grid items, o grid container é o grid pai, é ele que a gente coloca a configuração dos filhos
- Os grid items são os filhos do grid container
display: grid -> declara como grid

###### columns and rowns
- column-gap -> espaçamento entre colunas
- row-gap -> espaçamento entre linhas
- gap -> shorthand para espaçamento entre colunas e linhas

###### Lines
- The lines between columns are called column lines
- The lines between rows are called row lines
- Tag where use lines
    - grid-column-start
    - grid-column-end
    - grid-row-start
    - grid-row-end
- Shorthand for the tags above
    - grid-column
    - grid-row
###### Container
- grid-template-columns ->  Define how much columns do you want and the width of each
    - Example below
        - auto 100px 100px auto
        - I put 4 columns, 2 with auto size and 2 with size manually
- You can use the fr unit, it's a fraction unit
    - Example below
        - 1fr 1fr 1fr 1fr
        - Four columns, each with 25% of the site
- grid-template-rows -> Define the height of each row
    - Example below
        - 1fr 1fr 1fr 1fr
        - Four rows
- You can use the justify-content proprieties para mexer horizontalmente
- You can use the align-content proprieties para mexer verticalmente
- place-content -> is a placeholder for align and justify content
    - Example below
        - space-around space-evenly
###### Grid item
- grid-area -> is the shorthand of grid-row-start / grid-column-start / grid-row-end / grid-column-end
    - Example below
        - 1 / 2 / 3 / 2
        - start on row-line 1 and column-line 2, and end on row-line 3 and column line 2
- grid-area can also receive an nickname
- justify-self and align-self permite alinhar o conteudo dentro do grid item