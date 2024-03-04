import express from "express"
import { CreateAdmin } from "../controllers";

const router = express.Router();

router.route("/").post(CreateAdmin)

export {router as AdminRoute}