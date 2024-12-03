import { Router } from "express";
import { sendResponse } from "../controllers/controller.js";

const router = Router();

router.post("/send", sendResponse);

export default router;
