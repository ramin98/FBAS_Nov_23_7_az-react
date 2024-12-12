import { useContext } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { MyContext } from "../../../App";

function ProductPage() {
  let {productsState, product} = useContext(MyContext)
  let location = useLocation()
  console.log(location)
  let {id} = useParams()
  console.log(id)
  let elementIndex = productsState.products.findIndex((item) => item.id === parseInt(id)) 
  console.log(productsState.products[elementIndex])

  // product.current  = productsArray[elementIndex]

  if(!productsState.products[elementIndex]){
    return <h1>404 error</h1>
  }
  
  return (
    <section>
      <Link to='product-name'>PRODUCT NAME</Link>
      <Link to='product-restinfo'>PRODUCT NAME</Link>
      <Outlet context={productsState.products[elementIndex]}/>
    </section>
  );
}

export default ProductPage;
