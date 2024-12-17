import { useContext } from "react"
import ProductsList from "../Products/ProductsList"
import { MyContext } from "../../App"

function ProductsPage() {

    let {dispatchProducts} = useContext(MyContext)
  
    return (
      <section onChange={(ev) => dispatchProducts({type:'SORTING', payload: ev.target.value})}>
          <h1>Products Page</h1>
          <select>
            <option value="INCREASE PRICE">INCREASE PRICE</option>
            <option value="DECREASE PRICE">DECREASE PRICE</option>
          </select>
          <ProductsList/>
      </section>
    )
  }
  
  export default ProductsPage
  