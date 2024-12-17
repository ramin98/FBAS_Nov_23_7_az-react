import { useContext } from "react"
import { MyContext } from "../../App"

function AdminEditItem(props) {

    let {dispatchProducts} = useContext(MyContext)

    return(
        <li>
           <p>{props.product_name}</p>
           <p>{props.product_description}</p>
           <p>{props.product_price}</p>
           <img src={props.url} alt={props.product_name} />
           <button onClick={() => dispatchProducts({type:'ADD TO BAG', payload: props})}>DELETE</button>
        </li>
    )
}

export default AdminEditItem