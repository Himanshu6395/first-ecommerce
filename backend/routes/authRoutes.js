import express from "express";
import AuthController from "../controller/authcontroller.js";
import AuthService from "../service/auth.service.js";
import AuthRepository from "../repositories/auth.repository.js";
import User from "../model/user.js";

const router = express.Router();

// Repository instance
const authRepo = new AuthRepository({ User });
// Service instance
const authService = new AuthService(authRepo);
// Controller instance
const authController = new AuthController(authService);


router.post("/register", (req, res) => authController.register(req, res));
router.post("/login", (req, res) => authController.login(req, res));

export default router;
