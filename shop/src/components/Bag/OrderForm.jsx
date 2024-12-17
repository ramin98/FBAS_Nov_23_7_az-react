import { useContext } from "react"
import { MyContext } from "../../App"

function OrderForm() {

    let {dispatchBag} = useContext(MyContext)

    function handleForm(ev) {
        ev.preventDefault()
        let formData = Object.fromEntries([...new FormData(ev.target)])
        dispatchBag({type:'ORDER', payload: formData})
    }

    return(
        <div>
           <form onSubmit={handleForm}>
            <input type="text"  name="customer_name" placeholder="customer_name"/>
            <input type="text"  name="customer_email" placeholder="customer_email"/>
            <input type="text"  name="customer_number" placeholder="customer_number"/>
            <input type="text"  name="customer_address" placeholder="customer_address"/>
            <button>ORDER</button>
           </form>
        </div>
    )
}

export default OrderForm