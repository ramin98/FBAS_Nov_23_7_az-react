import { deleteProduct, deleteSelectedProduct } from "./AdminEditFetchs";

export const initialObjectAdminEdit = {
  products: [],
  ids: [],
};

export function reducerAdminEdit(state, action) {
  if (action.type === "GET PRODUCTS") {
    return { ...state, products: action.payload };
  } else if (action.type === "ADD PRODUCT") {
    let newArr = [...state.products];
    newArr.push(action.payload);
    console.log(action.payload);
    return { ...state, products: newArr };
  } else if (action.type === "DELETE") {
    let newArr = [...state.products];
    let index = newArr.findIndex((item) => item.id === action.payload);
    newArr.splice(index, 1);
    deleteProduct(action.payload);
    return { ...state, products: newArr };
  } else if (action.type === "EDIT") {
    let newArr = [...state.products];
    let index = newArr.findIndex((item) => item.id === action.payload.id);
    console.log(action.payload.url.size === 0);

    if (action.payload.url.size === 0) {
      action.payload.url = newArr[index].url;
    }

    newArr[index] = action.payload;

    return { ...state, products: newArr };
  } else if (action.type === "SELECT PRODUCT") {
    let newArr = [...state.ids];
    let index = newArr.findIndex((item) => item.id === action.payload);

    if (newArr.includes(action.payload)) {
      newArr.splice(index, 1);
    } else {
      newArr.push(action.payload);
    }
    console.log(newArr);

    return { ...state, ids: newArr };
  }
  else if (action.type === "DELETE SELECTED") {
    let ids = [...state.ids]
    let newArr = [...state.products].filter((item) => !ids.includes(item.id)) 

    deleteSelectedProduct(ids)
    return { ...state, products: newArr };
  }


  return state;
}
