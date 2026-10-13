import express, { type Request, type Response } from "express";
import { connection, prisma } from "./src/db.js";
import cors from "cors";
import { router } from "./src/routes.js";

export const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
connection();

console.log(process.env.DATABASE_URL);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 - 2");
});
