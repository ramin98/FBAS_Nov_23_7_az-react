import { useOutletContext } from "react-router-dom";

function ProductName() {
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
