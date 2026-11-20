import express, { Router, type Request, type Response } from "express";
import { prisma } from "./db.js";
import bcrypt from "bcrypt";
import { auth, login, register } from "./controller/userController.js";

export const router = Router();

// Rotas de usuário
router.post("/login", login);
router.post("/register", register);
router.get("/me", auth);
