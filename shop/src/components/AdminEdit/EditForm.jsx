import { useContext, useRef } from "react";
import { MyContext } from "../../App";
import { addProduct, editProduct } from "../../reducers/admin-edit/AdminEditFetchs";
import edit from "../../assets/edit.png";

function EditForm({ productObj }) {
  let { dispatchAdminEdit } = useContext(MyContext);

  let url = useRef(null);

  function handleForm(ev) {
    ev.preventDefault();
    let product = Object.fromEntries([...new FormData(ev.target)]);
    let file = url.current.files[0];
    product.id = productObj.id

    let fileReader = new FileReader();
    let formData = new FormData();

    function handleAdd() {
        formData.append("file", file);
        formData.append("data", JSON.stringify(product));
        editProduct(formData, dispatchAdminEdit, product);
    }

    if(file){
        fileReader.onload = (ev) => {
            product.url = ev.target.result;
            handleAdd()
          };
      
          fileReader.readAsDataURL(file);
    }else{
        handleAdd()
    }
    
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          defaultValue={productObj.product_name}
          type="text"
          name="product_name"
          placeholder="product_name"
        />
        <input
          defaultValue={productObj.product_description}
          type="text"
          name="product_description"
          placeholder="product_description"
        />
        <input
          defaultValue={productObj.product_price}
          type="text"
          name="product_price"
          placeholder="product_price"
        />
        <label
          style={{
            backgroundImage: `url(${edit})`,
            width: "60px",
            height: "60px",
            display: "inline-block",
            backgroundSize: "contain",
            cursor: "pointer",
          }}
        >
          <input
            style={{ display: "none" }}
            ref={url}
            type="file"
            name="url"
            placeholder="url"
          />
        </label>
        <button>EDIT</button>
      </form>
    </div>
  );
}

export default EditForm;
