import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// Forma antiga de uar o PrismaClient
// const prisma = new PrismaClient

export { prisma };

export async function connection() {
  await prisma.$connect();
  console.log("Conectado com o BD.");
}
