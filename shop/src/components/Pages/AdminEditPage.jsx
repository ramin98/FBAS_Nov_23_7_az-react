import { useContext } from "react"
import AddForm from "../AdminEdit/AddForm"
import AdminEditList from "../AdminEdit/AdminEditList"
import { MyContext } from "../../App"

function AdminEditPage() {
  let {dispatchAdminEdit} = useContext(MyContext)
  return (
    <section>
        <h1>Admin Edit Page</h1>
        <button onClick={() => dispatchAdminEdit({type: 'DELETE SELECTED'})}>DELETE ALL</button>
        <AddForm/>
        <AdminEditList/>
    </section>
  )
}

export default AdminEditPage

