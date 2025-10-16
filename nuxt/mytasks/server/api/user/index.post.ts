import { db } from "~~/server/database/database";
import { heroesTable } from "~~/server/database/schemas/schema";
import { newHero } from "~~/server/database/schemas/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const hero: newHero = {
    nome: body.nome,
    idade: Number(body.idade),
  };
  await db.insert(heroesTable).values(hero);
});
