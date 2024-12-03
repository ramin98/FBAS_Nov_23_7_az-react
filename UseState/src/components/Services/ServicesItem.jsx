import styled from "styled-components";
import styles from "../../App.module.css";
import styles2 from "../../style.module.css";
import EditForm from "./EditForm";
import { useState } from "react";

function ServicesItem(props) {
  let [flag, setFlag] = useState(false)
  
  console.log(styles);
  console.log(styles2);

  function handleDelete() {
    let newArr = [...props.servicesArray];
    let elementIndex = newArr.findIndex((item) => item.id === props.obj.id);
    newArr.splice(elementIndex, 1);
    props.setServicesArray(newArr);
  }

  return (
    <ServicesLi>
      <ServicesName>{props.obj.servicesName}</ServicesName>
      <ServicesDescription color="red">
        {props.obj.servicesDescription}
      </ServicesDescription>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={() => setFlag(!flag)}>EDIT</button>
      <EditForm
        flag={flag}
        servicesArray={props.servicesArray}
        setServicesArray={props.setServicesArray}
        id={props.obj.id}
      />
    </ServicesLi>
  );
}

export default ServicesItem;

const ServicesLi = styled.li`
  border: 2px solid black;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
  text-align: left;
`;

const ServicesName = styled.h3``;

const ServicesDescription = styled.p`
  color: ${(props) => props.color};
`;

// DIGER EDIT USULU

// import styled from "styled-components";
// import styles from "../../App.module.css";
// import styles2 from "../../style.module.css";
// import EditForm from "./EditForm";
// import { useState } from "react";

// function ServicesItem(props) {
//   // let [flag, setFlag] = useState(false)
  
//   console.log(styles);
//   console.log(styles2);

//   function handleDelete() {
//     let newArr = [...props.servicesArray];
//     let elementIndex = newArr.findIndex((item) => item.id === props.obj.id);
//     newArr.splice(elementIndex, 1);
//     props.setServicesArray(newArr);
//   }

//   return (
//     <ServicesLi>
//       <ServicesName>{props.obj.servicesName}</ServicesName>
//       <ServicesDescription color="red">
//         {props.obj.servicesDescription}
//       </ServicesDescription>
//       <button onClick={handleDelete}>DELETE</button>
//       <button onClick={() => {
//          let newArr = [...props.servicesArray];
//          let openArr = newArr.map((item) => {
//            if(item.id === props.obj.id){
//               return ({...item, open: !props.obj.open})
//            }else{
//             return ({...item, open: false})
//            }
//          })
//          props.setServicesArray(openArr);
//       }}>EDIT</button>
//       {props.obj.open &&
//         <EditForm
//         servicesArray={props.servicesArray}
//         setServicesArray={props.setServicesArray}
//         id={props.obj.id}
//       />
//       }
//     </ServicesLi>
//   );
// }

// export default ServicesItem;

// const ServicesLi = styled.li`
//   border: 2px solid black;
//   border-radius: 10px;
//   padding: 15px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   color: black;
//   text-align: left;
// `;

// const ServicesName = styled.h3``;

// const ServicesDescription = styled.p`
//   color: ${(props) => props.color};
// `;

