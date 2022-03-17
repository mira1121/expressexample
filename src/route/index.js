import { Router } from "express";
import create from "./table/create";
import find from "./table/find";
import auth from "../middlewares/auth";

const router = new Router();
router.route("/table").get(auth, find).post(auth, create);
router.route("/table").get(auth, find).post(auth, create);

export default router;
