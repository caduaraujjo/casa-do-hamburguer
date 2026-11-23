import express, { Router, type Request, type Response } from "express";
import { auth, login, logout, register } from "./controller/userController.js";

export const router = Router();

// Rotas de usuário
router.post("/login", login);
router.post("/register", register);
router.get("/me", auth);
router.post("/logout", logout);
