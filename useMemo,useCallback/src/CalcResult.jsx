import { memo } from "react";
import "./App.css";


const CalcResult = memo(({expensiveCalculation}) => {
  let result = expensiveCalculation(10000000000);
   
  return (
    <>
      <p>{result}</p>
    </>
  );
})

export default CalcResult;
