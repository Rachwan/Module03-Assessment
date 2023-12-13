import express from "express";

const router = express.Router();

import {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
} from "../Controllers/ArticleController.js";
import uploadImage from "../middlewares/multer.js";

router.post("/create", createArticle);

router.get("/getAll", uploadImage.single("image"), getAllArticles);

router.get("/get/:id",   uploadImage.single("image"), getArticleById);

router.put("/update/:id",   uploadImage.single("image"), updateArticle);

router.delete("/:id", deleteArticle);

export default router;
