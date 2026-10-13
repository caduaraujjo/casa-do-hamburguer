import express, { Router, type Request, type Response } from "express";
import { prisma } from "./db.js";
import bcrypt from "bcrypt";
import { login, register } from "./controller/userController.js";

export const router = Router();

// Rotas de usuário
router.post("/login", login);
router.post("/register", register);
