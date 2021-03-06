import { Request, Response } from "express";
import { Product, productModel } from "../models/product";
import { badRequest, internalServerError, notFound, ok, validateNumber } from "../services/util";


const insertProduct = (req: Request, res: Response) => {
    {
        const product = req.body;
        if (!product) {
            return badRequest(res, "Produto Inválido!");
        }

        if (!product.name) {
            return badRequest(res, "Informe o nome do produto!");
        }
        if (!validateNumber(product.price)) {
            return badRequest(res, "Informe o preço do produto!");
        }
    }
    
    const newProduct = req.body as Product;
    productModel.insertProduct(newProduct)
        .then(id => {
            res.status(201).json({ id: id })
        })
        .catch(err => internalServerError(res, err));
}

const updateProduct = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const oldProduct = req.body;
        if (!oldProduct)
            return badRequest(res, "Produto inválido");

        if (!oldProduct.name)
            return badRequest(res, 'Informe o nome do produto');

        if (!validateNumber(oldProduct.price))
            return badRequest(res, 'Informe o preço');

        const productSaved = await productModel.getProduct(id);
        if(!productSaved)
            return notFound(res);
    }

    const changedProduct = req.body as Product;
    return productModel.updateProduct(changedProduct)
        .then(product => {
            res.json(product)
        })
        .catch(err => internalServerError(res, err));
}

const listProducts = (req: Request, res: Response) => {
    productModel.listProducts()
        .then(products => {
            res.json(products)
        })
        .catch(err => internalServerError(res, err));
}

const getProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');
    }

    return productModel.getProduct(id)
        .then((product) => {
            if(product)
                return res.json(product);
            else
                return notFound(res);
        })
        .catch(err => internalServerError(res, err));
}

const deleteProduct = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const productSaved = await productModel.getProduct(id);
        if(!productSaved)
            return notFound(res);
    }

    return productModel.deleteProduct(id)
        .then(() => ok(res))
        .catch(err => internalServerError(res, err));
}

export const productController = {
     insertProduct,
     listProducts,
     getProduct,
     deleteProduct,
     updateProduct
}