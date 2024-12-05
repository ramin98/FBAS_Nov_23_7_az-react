import { useState } from "react";
import "./App.css";

function App() {
  // const [login, setLogin] = useState("");
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassowrd] = useState("");

  const [inputs, setInputs] = useState({
    login: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  // let login = "";
  // let name = "";
  // let surname = "";
  // let count = "";
  // let password = "";

  const handleInputs = (ev) => {
    setInputs({ ...inputs, [ev.target.name]: ev.target.value });
    console.log(inputs);
  };

  //8 boyuk
  //birinci herf herf olmalidir
  //butun  herf olmalidir


  // const handleInputLogin = (ev) => {
  //   setLogin(ev.target.value);
  //   console.log(login);
  //   // checkValues();
  // };

  // const handleInputName = (ev) => {
  //   setName(ev.target.value);
  //   console.log(name);
  //   // checkValues();
  // };

  // const handleInputSurname = (ev) => {
  //   setSurname(ev.target.value);
  //   console.log(surname);
  //   // checkValues();
  // };

  // const handleInputEmail = (ev) => {
  //   setEmail(ev.target.value);
  //   console.log(email);
  //   // checkValues();
  // };

  // const handleInputPassword = (ev) => {
  //   setPassowrd(ev.target.value);
  //   console.log(password);
  //   // checkValues();
  // };

  const checkValues = () => {
    if (
      [
        inputs.login,
        inputs.name,
        inputs.surname,
        inputs.email,
        inputs.password,
      ].every((item) => item.length >= 8)
    ) {
      console.log(true);
      return false;
    } else {
      console.log(false);
      return true;
    }
  };

  let isActive = checkValues();

  return (
    <div>
      <form>
        <input
          onInput={handleInputs}
          type="text"
          name="login"
          placeholder="login"
        />
        <input
          onInput={handleInputs}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onInput={handleInputs}
          type="text"
          name="surname"
          placeholder="surname"
        />
        <input
          onInput={handleInputs}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onInput={handleInputs}
          type="text"
          name="password"
          placeholder="password"
        />
        <button disabled={isActive}>REGISTER</button>
      </form>
      <p>{inputs.login}</p>
      <p>{inputs.name}</p>
      <p>{inputs.surname}</p>
      <p>{inputs.email}</p>
      <p>{inputs.password}</p>
    </div>
  );
}

export default App;
