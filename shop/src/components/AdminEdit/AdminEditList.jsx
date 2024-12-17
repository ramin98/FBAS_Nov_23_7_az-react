import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import { getProducts } from "../../reducers/products/productsFetchs"
import AdminEditItem from "./AdminEditItem"

function AdminEditList() {
    let {stateAdminEdit, dispatchAdminEdit} = useContext(MyContext)

    useEffect(() => {
         getProducts(dispatchAdminEdit)
    }, [])

    return(
        <ul>
          {stateAdminEdit.products.map((item) => <AdminEditItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default AdminEditList