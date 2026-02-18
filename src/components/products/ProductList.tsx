import { ProductCard } from "./ProductCard";
import type { ProductInterface } from "@/features/products/productInterfaces";
import { Container } from "react-bootstrap";

interface ProductsListProps {
  products: ProductInterface[];
  loading?: boolean;
}
export const ProductList = ({products, loading}: ProductsListProps) => {
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};