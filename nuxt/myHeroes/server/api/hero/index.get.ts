import { db } from "~~/server/database/database";
import { hero } from "~~/server/database/schemas/schema";

export default defineEventHandler(async () => {
  const allUsers = await db.select().from(hero);
  return { herois: allUsers };
});
