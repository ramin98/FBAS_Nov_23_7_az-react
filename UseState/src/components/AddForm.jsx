function AddForm({servicesArray, setServicesArray}) {

  function handleAddFrom(ev) {
    ev.preventDefault()
    let formData = Object.fromEntries([...new FormData(ev.target)])
    formData.id = servicesArray.length === 0 ? 1 : servicesArray.at(-1).id + 1
    console.log(formData)
    let newArr = [...servicesArray]
    newArr.push(formData)
    setServicesArray(newArr)
  }

  return (
    <form onSubmit={handleAddFrom}>
      <input type="text" name="servicesName" placeholder="servicesName"/>
      <input type="text" name="servicesDescription" placeholder="servicesDescription"/>
      <button>ADD</button>
    </form>
  );
}

export default AddForm;


