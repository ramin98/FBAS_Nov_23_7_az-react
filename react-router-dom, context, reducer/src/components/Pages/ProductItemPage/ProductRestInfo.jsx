import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { MyContext } from "../../../App";

function ProductRestInfo() {
  let { product } = useContext(MyContext);
  console.log(product.current);

  let obj = useOutletContext();
  if (!obj) {
    return <h1>404 NOT FOUND</h1>;
  }
  return (
    <section>
      <h1>ProductRestInfo</h1>
      {/* <p>{product.current.productDescription}</p>
      <p>{product.current.productPrice}</p>
      <p> {product.current.active ? "HAS IN STOCK" : "HAS NOT IN STOCK"}</p> */}
      <p>{obj.productDescription}</p>
      <p>{obj.productPrice}</p>
      <p> {obj.active ? "HAS IN STOCK" : "HAS NOT IN STOCK"}</p>
    </section>
  );
}

export default ProductRestInfo;
