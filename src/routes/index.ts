import { Application, Router } from "express";
import pingRouter from "./ping";
import { productRouter } from "./products";
import swaggerUi from "swagger-ui-express";


export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/products', productRouter);
    apiRouter.use('/ping', pingRouter);

    apiRouter.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(undefined, {
          swaggerOptions: {
            url: "/swagger.json",
          },
        })
      );

    app.use('/api/v1', apiRouter);
};