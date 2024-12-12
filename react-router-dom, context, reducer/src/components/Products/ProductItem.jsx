import styled from "styled-components";
import EditForm from "./EditForm";
import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

function ProductItem(props) {
  let [show, setShow] = useState(false);

  let inputName = useRef("");
  let inputDescription = useRef("");
  let inputPrice = useRef("");
  let button = useRef(null);
  let navigate = useNavigate();

  let { product } = useContext(MyContext);

  
  return (
    <ProductsLi>
      {props.obj.active && (
        <>
          <ProductName>{props.obj.productName}</ProductName>
          <ProductDescription>
            {props.obj.productDescription}
          </ProductDescription>
          <ProductPrice>{props.obj.productPrice} AZN</ProductPrice>
          <button
            onClick={() => {
              product.current = props.obj;
              navigate(`/product-page/${props.obj.id}`, { state: props.obj });
            }}
          >
            SHOW
          </button>
          <Link state={props.obj} to={`/product-page/${props.obj.id}`}>
            SHOW
          </Link>
          <button
            ref={button}
            onClick={() => {
              console.log(button.current);
              setShow(!show);
              inputName.current = props.obj.productName;
              inputDescription.current = props.obj.productDescription;
              inputPrice.current = props.obj.productPrice;
            }}
          >
            EDIT
          </button>
        </>
      )}
      <HasInStock>
        {props.obj.active ? "HAS IN STOCK" : "HAS NOT IN STOCK"}
      </HasInStock>
      <EditForm
        show={show}
        id={props.obj.id}
        inputName={inputName}
        inputDescription={inputDescription}
        inputPrice={inputPrice}
      />
    </ProductsLi>
  );
}

export default ProductItem;

const ProductsLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border: 2px solid black;
  border-radius: 10px;
`;

const ProductName = styled.h3``;
const ProductDescription = styled.p``;
const ProductPrice = styled.span``;
const HasInStock = styled.span``;
