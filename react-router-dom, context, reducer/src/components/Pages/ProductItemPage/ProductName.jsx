import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { MyContext } from "../../../App";

function ProductName() {
  let { product } = useContext(MyContext)

  console.log(product.current);

  let obj = useOutletContext()

  if (!obj) {
    return <h1>404 NOT FOUND</h1>;
  }
  
  return (
    <section>
      <h1>ProductName</h1>
      {/* <p>{product.current.productName}</p> */}
      <p>{obj.productName}</p>

    </section>
  );
}

export default ProductName;
