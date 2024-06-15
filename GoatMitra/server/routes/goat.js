import express from "express";
import {
     getGoat
} from "../controllers/goat.js";

const router = express.Router();

/* READ */
router.get("/goat/:id", getGoat);

export default router;
