import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import { getProducts } from "../../reducers/products/productsFetchs"
import ProductsItem from "./ProductsItem"

function ProductsList() {

    let {stateProducts, dispatchProducts} = useContext(MyContext)

    useEffect(() => {
         getProducts(dispatchProducts)
    }, [])

    return(
        <ul>
          {stateProducts.products.map((item) => <ProductsItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default ProductsList