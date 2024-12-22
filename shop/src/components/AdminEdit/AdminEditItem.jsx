import { useContext, useState } from "react";
import { MyContext } from "../../App";
import EditForm from "./EditForm";

function AdminEditItem(props) {
  let [editActive, setEditActive] = useState(false);

  let { dispatchAdminEdit, stateAdminEdit } = useContext(MyContext);

  return (
    <li>
      <p>{props.product_name}</p>
      <p>{props.product_description}</p>
      <p>{props.product_price}</p>
      <img src={props.url} alt={props.product_name} />
      <input
        type="checkbox"
        checked={stateAdminEdit.ids.includes(props.id)}
        onChange={() =>
          dispatchAdminEdit({ type: "SELECT PRODUCT", payload: props.id })
        }
      />
      <button
        onClick={() => dispatchAdminEdit({ type: "DELETE", payload: props.id })}
      >
        DELETE
      </button>
      <button onClick={() => setEditActive(!editActive)}>SHOW EDIT FORM</button>

      {editActive && <EditForm productObj={props} />}
    </li>
  );
}

export default AdminEditItem;
