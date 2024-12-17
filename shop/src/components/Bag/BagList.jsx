import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import BagItem from "./BagItem"

function BagList() {

    let {stateBag, dispatchBag} = useContext(MyContext)

    useEffect(() => {
      dispatchBag({type:'GET BAG'})
    }, [])

    return(
        <ul>
          {stateBag.bag.map((item) => <BagItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default BagList