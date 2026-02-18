import { ProductList } from "@/components/products/ProductList";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { productListApi } from "./productsSlice";
export const ProductsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading } = useSelector((state: RootState) => state.products);
    useEffect(() => {
        dispatch(productListApi());
    }, [dispatch]);
    return (
      <div>
        <h1>Products</h1>
        <ProductList products={data ?? []} loading={loading} />
      </div>
    );
};