import { Link, Outlet, useLocation, useOutletContext, useParams } from "react-router-dom";

function ProductPage() {

  let {productsArray, product} = useOutletContext()
  let location = useLocation()
  console.log(location)
  let {id} = useParams()
  console.log(id)
  let elementIndex = productsArray.findIndex((item) => item.id === parseInt(id)) 
  console.log(productsArray[elementIndex])

  // product.current  = productsArray[elementIndex]

  if(!productsArray[elementIndex]){
    return <h1>404 error</h1>
  }
  
  return (
    <section>
      <Link to='product-name'>PRODUCT NAME</Link>
      <Link to='product-restinfo'>PRODUCT NAME</Link>
      <Outlet context={productsArray[elementIndex]}/>
    </section>
  );
}

export default ProductPage;
