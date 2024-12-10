function EditForm({
  productsArray,
  setProductsArray,
  show,
  id,
  inputPrice,
  inputName,
  inputDescription,
}) {
  function handleForm(ev) {
    ev.preventDefault();
    let newArr = [...productsArray];
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    let objIndex = productsArray.findIndex((item) => item.id === id);
    newArr[objIndex].productName = formData.productName;
    newArr[objIndex].productDescription = formData.productDescription;
    newArr[objIndex].productPrice = parseInt(formData.productPrice);
    console.log(formData.active);
    newArr[objIndex].active = formData.active === "on" ? true : false;
    setProductsArray(newArr);
  }

  return (
    <form className={show ? "" : "hide"} onSubmit={handleForm}>
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
