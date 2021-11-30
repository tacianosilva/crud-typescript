import { Product } from '../models/product';

const listProducts = () : Promise<Product[]> => {
    return new Promise((resolve) => {
        const products: Product[] = [
            { id: 1, name: "Borracha", price: 1.99 },
            { id: 2, name: "Caderno", price: 3.99 },
            { id: 3, name: "Kit de Lapis", price: 4.99 },
            { id: 4, name: "Caneta", price: 5.99 }
        ];
        resolve(products);
    });
}

const listProductsPage = (page: number, limit: number) : Promise<Product[]> => {
    console.info(`listProducts: page=${page}, limit=${limit}`);
    return new Promise((resolve) => {
        const products: Product[] = [
        ];
        resolve(products);
    });
}

const productService = {
    listProducts,
    listProductsPage
} 

export default productService;