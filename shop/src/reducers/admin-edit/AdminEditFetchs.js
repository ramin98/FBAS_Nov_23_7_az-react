export async function addProduct(formData,dispatch,product) {
    let res = await fetch('http://localhost:5000/add-admin', {
        method:'POST',
        body: formData
    })
    let data = await res.json()
    console.log(data)
    dispatch({type:'ADD PRODUCT', payload: {...product, id:data.id}})
}

export async function deleteSelectedProduct(ids) {
    let res = await fetch('http://localhost:5000/delete-admin/multiple', {
        method:'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ids: ids})
    })
    let data = await res.json()
    console.log(data)
}

export async function editProduct(formData,dispatch,product) {
    let res = await fetch('http://localhost:5000/change-admin/' + product.id, {
        method:'PUT',
        body: formData
    })
    let data = await res.json()
    console.log(data)
    dispatch({type:'EDIT', payload: product})
}

export async function deleteProduct(id) {
    let res = await fetch('http://localhost:5000/delete-admin/' + id, {
        method:'DELETE',
    })
    let data = await res.json()
    console.log(data)
}