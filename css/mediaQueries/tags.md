# Learning Media Queries
Medidas específicas para aplicar
- Dispositivos super pequenos (phones, 600px and down)
    - @media only screen and (max-width: 600px) {...}
- Dispositivos pequenos (tablets vertical e celulares largos, 600px pra cima)
    - @media only screen and (min-width: 600px) {...}
- Dispositivos médios (Tablets deitados, 768px pra cima)
    - @media only screen and (min-width: 768px) {...}
- Dispositivos grandes (notebook/computadores, 992px pra cima)
    - @media only screen and (min-width: 992px) {...}
- Dispositivos super grandes (computadores e notebook grandes, 1200px pra cima)
    - @media only screen and (min-width: 1200px) {...}
##### Medidas
| Dispositivo / Tela         | Largura (px) | Font-size h1 | Font-size h2 | Font-size p |
|----------------------------|-------------|-------------|-------------|-------------|
| Smartphone pequeno         | 320–360     | 1.5rem (24px) | 1.2rem (19px) | 1rem (16px) |
| Smartphone médio           | 361–480     | 2rem (32px)   | 1.5rem (24px) | 1rem (16px) |
| Tablet retrato             | 481–768     | 2.5rem (40px) | 2rem (32px)   | 1.125rem (18px) |
| Tablet paisagem / mini laptop | 769–1024  | 3rem (48px)   | 2.5rem (40px) | 1.125–1.25rem (18–20px) |
| Laptop / desktop médio     | 1025–1280   | 3.5rem (56px) | 3rem (48px)   | 1.25rem (20px) |
| Desktop grande             | 1281–1440   | 4rem (64px)   | 3.5rem (56px) | 1.25–1.375rem (20–22px) |
| Ultra wide / 4K            | 1441–1920+  | 4.5rem (72px) | 4rem (64px)   | 1.375rem (22px) |


###### landscape and portrait
- Você pode configurar o css dependendo da orientação que o dispositivo está
- Se o width estiver maior que o height -> landscape
- Se o height estiver maior que o width -> portrait
    - @media only screen and (orientation: landscape){...}
    