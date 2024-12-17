function AdminItem(props) {
  return (
    <li>
      <p>customer_name - {props.customer_name} </p>
      <p>customer_address - {props.customer_address}</p>
      <p>customer_email - {props.customer_email} </p>
      <p>customer_number - {props.customer_number} </p>
      <p>products_sum - {props.products_sum} </p>

      <ul>
        {props.customer_bag.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
              <img src={item.url} alt={item.product_name} />
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default AdminItem;
