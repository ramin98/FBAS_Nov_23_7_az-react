import { useSelector, useDispatch } from "react-redux";
import { completedFetch } from "../store/reducers/todoFetchs";
import { useEffect } from "react";

function CompletedList() {
  let completedList = useSelector(
    (state) => state.completedList.completedArray
  );
  let loading = useSelector((state) => state.completedList.loading);
  let error = useSelector((state) => state.completedList.error);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(completedFetch());
  }, []);

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  if (error) {
    return <h1>ERROR!!!</h1>;
  }

  return (
    <div>
      <h1>COMPLETED LIST</h1>
      <ul>
        {completedList.map((item) => {
          return (
            <li key={item.id}>
              <p>
                {item.id}: {item.todo} -{" "}
                {item.completed ? "COMPLETED" : "UNCOMPLETED"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CompletedList;
