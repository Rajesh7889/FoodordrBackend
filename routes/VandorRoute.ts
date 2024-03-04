import express, {Request,Response,NextFunction} from "express"
import { CreateVandor, GetBandorById, GetVanndors } from "../controllers";

const router = express.Router();

router.route("/").post(CreateVandor)
                 .get(GetVanndors)

router.route("/:id").get(GetBandorById)

export {router as VandorRoute}