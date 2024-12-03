function AddForm({ productsArray, setProductsArray }) {
  function handleForm(ev) {
    ev.preventDefault();
    let newArr = [...productsArray];
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    formData.id = newArr.length === 0 ? 1 : newArr.at(-1).id + 1;
    console.log(formData);
    newArr.push(formData);
    setProductsArray(newArr);
  }

  return (
    <form onSubmit={handleForm}>
      <input type="text" name="productName" placeholder="productName" />
      <input
        type="text"
        name="productDecription"
        placeholder="productDecription"
      />
      <label>
        HAS IN STOCK
        <input type="checkbox" name="active" />
      </label>
      <button>ADD</button>
    </form>
  );
}

export default AddForm;
