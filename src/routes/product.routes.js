//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router();

router.get("/", productController.getProductsController);
router.get("/:id", productController.getProductByIdController);
router.post("/create", productController.createProductController);
router.delete("/:id", productController.deleteProductController);

export default router;
