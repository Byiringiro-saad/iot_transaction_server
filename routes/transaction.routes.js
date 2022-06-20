import express from "express";
import { saveTransaction } from "../controllers/transaction.controllers.js";
const router = express.Router();

router.post("/save", saveTransaction);

export default router;
