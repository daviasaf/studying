- rodando drizzle com mysql
- npm init -y
- npx tsc --init
- baixar
    - normal
        - mysql2
        - dotenv
        - drizzle-orm
    - dependencia 
        - typescript
        - tsx
        - drizzle-kit

- crie um arquivo .env e coloque o link de conexão do database
    - DATABASE_URL=mysql://root:mypassword@localhost:3306/mysql
- crie um arquivo chamado drizzle.config.ts
- configure o index.ts
- configure o schema.ts
- configure o drizzle.config.ts

# comandos
- npx drizzle-kit push
- npx tsx src/index.ts
- drizzle-kit migrate
- drizzle-kit generate
- drizzle-kit push
- drizzle-kit pull
- npm audit --omit=dev

