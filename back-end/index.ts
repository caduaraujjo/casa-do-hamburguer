import express from "express";
import { connection, prisma } from "./src/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connection();

console.log(process.env.DATABASE_URL);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { email: email, password: password },
  });

  res.json(user);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 - 2");
});
