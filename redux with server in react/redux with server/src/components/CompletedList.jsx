import { useSelector, useDispatch } from "react-redux";
import { getCompletedList } from "../store/reducers/todoFetchs";
import { useEffect } from "react";

function CompletedList() {
  let completedList = useSelector((state) => state.completedList.completedArray)

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompletedList())
  },[])

  return (
    <div>
      <h1>COMPLETED LIST</h1>
      <ul>
        {completedList.map((item) => {
          return (
            <li key={item.id}>
              <p>
                {item.id}: {item.todo} - {item.completed ? 'COMPLETED' : 'UNCOMPLETED'}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CompletedList;
