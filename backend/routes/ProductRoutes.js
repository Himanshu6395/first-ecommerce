import express from "express";
import ProductController from "../controller/productContoller.js";
import ProductService from "../service/productService.js";
import ProductRepository from "../repositories/productRepository.js";
import Product from "../model/ProductSchema.js";
import categories from "../model/categories.js";
import subCategories from "../model/subCategories.js";
const router = express.Router();

// Repository instance
const productRepo = new ProductRepository({ Product,categories,subCategories});

// Service instance
const productService = new ProductService(productRepo);

// Controller instance
const productController = new ProductController(productService);

//  GET filters
router.get("/filters", (req, res) =>
  productController.getFilters(req, res)
);

//  GET products with filters (query params)
router.get("/", (req, res) =>
  productController.filter(req, res)
);

export default router;
