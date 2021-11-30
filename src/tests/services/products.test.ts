import ProductService from '../../services/ProductService';

test("should return list products", async () => {
    const products = await ProductService.listProducts();
    expect(products).toHaveLength(4);
    expect(products).toContainEqual({ id: 1, name: "Borracha", price: 1.99 });
});

test("should return list product pagened", async () => {
  const products = await ProductService.listProductsPage(0, 2);
  expect(products).toHaveLength(0);
});