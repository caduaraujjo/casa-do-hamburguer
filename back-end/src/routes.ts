import express, { Router, type Request, type Response } from "express";
import { auth, login, logout, register } from "./controller/userController.js";
import { authMiddlawere } from "./middlewares/authMiddlawere.js";

export const router = Router();

// Rotas de usuário
router.post("/login", login);
router.post("/register", register);
router.get("/me", authMiddlawere, auth);
router.post("/logout", authMiddlawere, logout);
