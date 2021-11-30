import { Router } from "express";
import PingController from "../controllers/ping";

const pingRouter = Router()

pingRouter.get('/', async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
    }
);

export default pingRouter;