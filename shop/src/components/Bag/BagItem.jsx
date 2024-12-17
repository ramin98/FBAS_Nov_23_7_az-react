import { useContext } from "react"
import { MyContext } from "../../App"

function BagItem(props) {

    let {dispatchBag} = useContext(MyContext)

    return(
        <li>
           <p>product_name - {props.product_name}</p>
           <p>product_description - {props.product_description}</p>
           <p>product_price - {props.product_price}</p>
           <img src={props.url} alt={props.product_name} />
           <button onClick={() => dispatchBag({type:'DELETE', payload: props.id})}>DELETE</button>
           <div>
           <button onClick={() => dispatchBag({type:'MINUS', payload: props.id})}>MINUS</button>
           <p>count - {props.count}</p>
           <p>total_price - {props.total_price}</p>
           <button onClick={() => dispatchBag({type:'PLUS', payload: props.id})}>PLUS</button>
           </div>
        </li>
    )
}

export default BagItem