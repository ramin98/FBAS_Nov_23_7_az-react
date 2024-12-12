import { useContext } from "react";
import { MyContext } from "../../App";

function EditForm({
  show,
  id,
  inputPrice,
  inputName,
  inputDescription,
}) {
  let { productsDispatch } = useContext(MyContext);

  function handleFormEdit(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    productsDispatch({type: 'EDIT FORM', payload: {id:id, formData:formData}})
  }
  
  return (
    <form className={show ? "" : "hide"} onSubmit={handleFormEdit}>
      <input
        type="text"
        name="productName"
        placeholder="productName"
        defaultValue={inputName.current}
      />
      <input
        type="text"
        name="productDecription"
        placeholder="productDecription"
        defaultValue={inputDescription.current}
      />
      <input
        type="text"
        name="productPrice"
        placeholder="productPrice"
        defaultValue={inputPrice.current}
      />
      <label>
        HAS IN STOCK
        <input className="check" type="checkbox" name="active" />
      </label>
      <button>SAVE</button>
    </form>
  );
}

export default EditForm;
