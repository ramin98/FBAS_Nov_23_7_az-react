import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import {
  initialObjectProducts,
  reducerProducts,
} from "./reducers/products/reducerProducts";
import { initialObjectBag, reducerBag } from "./reducers/bag/reducerBag";
import {
  initialObjectAdmin,
  reducerAdmin,
} from "./reducers/admin/reducerAdmin";
import {
  initialObjectAdminEdit,
  reducerAdminEdit,
} from "./reducers/admin-edit/reducerAdminEdit";

export const MyContext = createContext();

function App() {
  useEffect(() => {
    if (!localStorage.getItem("bag")) {
      localStorage.setItem("bag", JSON.stringify([]));
    }
  }, []);

  let [stateProducts, dispatchProducts] = useReducer(
    reducerProducts,
    initialObjectProducts
  );
  let [stateBag, dispatchBag] = useReducer(reducerBag, initialObjectBag);
  let [stateAdmin, dispatchAdmin] = useReducer(
    reducerAdmin,
    initialObjectAdmin
  );
  let [stateAdminEdit, dispatchAdminEdit] = useReducer(
    reducerAdminEdit,
    initialObjectAdminEdit
  );
  return (
    <MyContext.Provider
      value={{
        stateProducts,
        dispatchProducts,
        stateBag,
        dispatchBag,
        stateAdmin,
        dispatchAdmin,
        stateAdminEdit,
        dispatchAdminEdit,
      }}
    >
      <Header />
      <MainComponent />
    </MyContext.Provider>
  );
}

export default App;
