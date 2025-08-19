/*
    This is the storage of the routes from the proyect.

    The routes follow the next path $HOST/$route/$functionality

    NOTE: No logic will be coded in HERE!

*/

import { Router } from "express";
import { deepseekPromptExecution } from "../controllers/deepseek.controller.js"
import { openaiPromptExecution } from "../controllers/openai.controller.js";

const router = Router();

router.post("/deepseek/prompt", deepseekPromptExecution );
router.post("/openai/prompt", openaiPromptExecution );

export default router;