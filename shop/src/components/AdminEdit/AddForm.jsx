import { useContext, useRef } from "react";
import { MyContext } from "../../App";
import { addProduct } from "../../reducers/admin-edit/AdminEditFetchs";

function AddForm() {
  let { dispatchAdminEdit } = useContext(MyContext);

  let url = useRef(null);

  function handleForm(ev) {
    ev.preventDefault();
    let product = Object.fromEntries([...new FormData(ev.target)]);
    let file = url.current.files[0];

    let fileReader = new FileReader();

    fileReader.onload = (ev) => {
      product.url = ev.target.result;

      let formData = new FormData();
      formData.append("file", file);
      formData.append("data", JSON.stringify(product));
      addProduct(formData, dispatchAdminEdit, product);
    };

    fileReader.readAsDataURL(file)
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="product_name" placeholder="product_name" />
        <input
          type="text"
          name="product_description"
          placeholder="product_description"
        />
        <input type="text" name="product_price" placeholder="product_price" />
        <input ref={url} type="file" name="url" placeholder="url" />
        <button>ORDER</button>
      </form>
    </div>
  );
}

export default AddForm;
