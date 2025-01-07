import { useCallback, useMemo, useState } from "react";
import "./App.css";
import CalcResult from "./CalcResult";


function App() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useCallback((value) => {
    let num = 0;
    for (let index = 0; index < value; index++) {
      num += index;
    }
    return num;
  },[])

  // let result = useMemo(() => {
  //   return expensiveCalculation(10000000000);
  // }, []);

  return (
    <>
      {/* <p>{result}</p> */}
      <CalcResult expensiveCalculation={expensiveCalculation}/>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
