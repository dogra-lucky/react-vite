import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import type {ProductInterface} from "@/features/products/productInterfaces";
export const ProductCard = (product: ProductInterface) => {
     return (
       <Card style={{width: "18rem"}}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title>Product Details</Card.Title>
           <Card.Text>
             Product Name: {product.title}
            Product Price: {product.price}
            Product Description: {product.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  };
export default ProductCard;
