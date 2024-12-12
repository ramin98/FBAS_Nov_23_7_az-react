import { useContext } from "react";
import { MyContext } from "../App";

function AddForm() {
  let { productsDispatch } = useContext(MyContext)

  function handleFormAdd(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    productsDispatch({type: 'ADD FORM', payload: formData})
  }
  
  return (
    <form onSubmit={handleFormAdd}>
      <input type="text" name="productName" placeholder="productName" />
      <input
        type="text"
        name="productDecription"
        placeholder="productDecription"
      />
      <label>
        HAS IN STOCK
        <input className="check" type="checkbox" name="active" />
      </label>
      <button>ADD</button>
    </form>
  );
}

export default AddForm;
