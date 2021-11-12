import { dbQueryFirst, executeQuery } from "../services/db"

export type Product = {
    id: number;
    name: string;
    price: number;
}

const insertProduct = async (product: Product) => {
    await executeQuery('INSERT INTO product (name, price) VALUES (?, ?)', [product.name, product.price])
    let retorno = await executeQuery(`SELECT seq as id FROM sqlite_sequence WHERE name = 'product'`);

    return retorno[0].id as number | undefined; 
}

const updateProduct = async (product: Product) => {
    await executeQuery(`UPDATE product SET name = ?, price = ? WHERE id = ?`, [product.name, product.price, product.id])
    return getProduct(product.id);
}

const listProducts = async () => {
    const retorno = await executeQuery(`SELECT * FROM product`);
    return retorno as Product[];
}

const getProduct = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM product WHERE id = ?`, [id]);
    return retorno as Product | undefined;
}

const deleteProduct = async (id: number) => {
    await dbQueryFirst(`DELETE FROM product WHERE id = ?`, [id]);
}

export const productModel = {
    insertProduct,
    listProducts,
    getProduct,
    deleteProduct,
    updateProduct
}