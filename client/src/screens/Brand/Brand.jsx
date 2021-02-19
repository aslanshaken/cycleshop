import { useParams, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Brand.css";
import Layout from "../../components/shared/Layout/Layout";

function Brand(props) {
  const { id } = useParams();
  const [img, setImg] = useState("");

  useEffect(() => {
    const brandImg = () => {
      id === "Arch" &&
        setImg(
          "https://www.logo.wine/a/logo/Arch_Motorcycle/Arch_Motorcycle-Logo.wine.svg"
        );
      id === "Harley Davidson" &&
        setImg(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/1200px-Harley-Davidson_logo.svg.png"
        );
      id === "Yamaha" &&
        setImg(
          "https://www.freepnglogos.com/uploads/yamaha-png-logo/yamaha-revs-your-heart-png-logo-16.png"
        );
      id === "Ducati" &&
        setImg(
          "https://seeklogo.com/images/D/ducati-logo-880362D0BD-seeklogo.com.png"
        );
      id === "BMW" &&
        setImg("https://www.logo.wine/a/logo/BMW/BMW-Logo.wine.svg");
    };
    brandImg();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <Layout user={props.user}>
        <div className="brand-container-logo">
          <img className="brand-logo" src={img} alt={id} />
        </div>
        <div>
          {props.products.map((product, index) => {
            if (product.brand === id) {
              return (
                <div className="brand-container" key={index}>
                  <div className="brand-name">{product.name}</div>

                  <div className="brand-img">
                    <img src={product.imgURL} alt={product.name} />
                  </div>

                  <div className="brand-price">{product.price}</div>

                  <NavLink
                    className="brand-manage"
                    to={`/manage/${product._id}`}
                  >
                    {" "}
                    MANAGE
                  </NavLink>

                  <NavLink className="brand-sell" to="/sell">
                    {" "}
                    SELL
                  </NavLink>
                </div>
              );
            }
          })}
        </div>
      </Layout>
    </div>
  );
}

export default Brand;
