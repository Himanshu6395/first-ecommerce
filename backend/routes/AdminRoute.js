import express from "express";
import adminAuthController from "../controller/adminAuthController.js";
import AuthService from "../service/adminAuthService.js";
import AuthRepository from "../repositories/AdminAuthRepoitory.js";
import Admin from "../model/adminSchema.js";
import Category from "../model/categories.js";
import SubCategory from "../model/subCategories.js";
import Product from "../model/ProductSchema.js";
import File from "../model/fileSchema.js"
import { s3Client, S3_BUCKET } from "../s3/config.js";
const router = express.Router();

// Repository instance
const authRepo = new AuthRepository({ Admin, Category, SubCategory, Product,File});
// Service instance
const authService = new AuthService(
  authRepo,
  S3_BUCKET,
  s3Client
);
// Controller instance
const adminController = new adminAuthController(authService);

router.post("/register", (req, res) => adminController.register(req, res));
router.post("/login", (req, res) => adminController.login(req, res));
router.post("/add-category",(req, res) =>adminController.addCategory(req, res));
router.post("/add-sub-category",(req, res) =>adminController.addSubCategory(req, res));
router.get("/get-categories",(req, res) =>adminController.getCategories(req, res));
router.get("/get-sub-categories/:categoryId",(req, res) =>adminController.getSubCategoriesByCategory(req, res));
router.post("/add-product",(req, res) =>adminController.addProduct(req, res));
router.get("/get-presigned-url",(req,res)=>adminController.getPreSignUploadUrl(req,res));
export default router;
