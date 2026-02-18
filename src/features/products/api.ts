import {productsList} from "./productsData";
import type { ProductInterface } from "./productInterfaces";

export const productsListRoute = async (): Promise<ProductInterface[]> => {
  return (await productsList) as unknown as ProductInterface[];
};

export const productGetById = async (
  id: number,
): Promise<ProductInterface[]> => {
  const filtered = productsList.filter((prod) => prod.id === id);
  return filtered as unknown as ProductInterface[];
};
