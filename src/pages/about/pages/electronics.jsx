import React from "react";
import { linkAxios } from "../../../config/linkAxios";
import loading from "../../../img/loading.gif";
const Electronic = () => {
  const [data, setData] = React.useState(false);
  React.useEffect(() => {
    linkAxios.get(`/products/category/electronics`).then((response) => {
      setData(response.data);
    });
  }, []);
  return !data ? (
    <div>
   <img className="loadings" src={loading} alt="loading" />
    </div>
  ) : (
    <div className="shop-content">
      {data?.map((el) => (
        <div className="product-box" key={el.id}>
          <div className="product-img">
            <img src={el.image} alt="watch1" className="product-img" />
          </div>
          <h3 className="product-title">{el.title}</h3>
          <span className="reting"></span>
          <span className="price">
            $ {el.price} 🤔 <p className="sale">24% SALE OF</p>
            {(el.price * 0.75).toFixed(2)} 🤩{" "}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Electronic;
