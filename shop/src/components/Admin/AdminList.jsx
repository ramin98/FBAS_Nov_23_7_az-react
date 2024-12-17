import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import { getOrders } from "../../reducers/admin/adminFetchs"
import AdminItem from "./AdminItem"

function AdminList() {

    let {stateAdmin, dispatchAdmin} = useContext(MyContext)

    useEffect(() => {
         getOrders(dispatchAdmin)
    }, [])

    return(
        <ul>
          {stateAdmin.orders.map((item) => <AdminItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default AdminList