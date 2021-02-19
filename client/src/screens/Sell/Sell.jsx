import React, { useState } from "react";
import "./Sell.css";
import { Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { createMotorcycle } from "../../services/products";
// import morgan from "morgan";

function MotorcycleSell(props) {
  const [motorcycle, setMotorcycle] = useState({
    brand: "Arch",
    description: "",
    imgURL: "",
    name: "",
    price: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMotorcycle({
      ...motorcycle,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createMotorcycle(motorcycle);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to="/" />;
  }
  return (
    <Layout user={props.user}>
      <div className="sell-container-main-title">
        <div className="sell-main-title">Add Motorcycle for Sale</div>
      </div>
      <form className="sell-container" onSubmit={handleSubmit}>
        <div className="sell-header-title">TITLE</div>
        <input
          className="sell-title"
          // placeholder="Name"
          value={motorcycle.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <div className="sell-header-brand">BRAND</div>
        <select
          className="sell-brand"
          name="brand"
          value={motorcycle.brand}
          onChange={handleChange}
        >
          <option value={"Arch"}>Arch</option>
          <option value={"BMW"}>BMW</option>
          <option value={"Ducati"}>Ducati</option>
          <option value={"Yamaha"}>Yamaha</option>
          <option value={"Harley Davidson"}>Harley Davidson</option>
        </select>
        <div className="sell-header-description">DESCRIPTION</div>
        <textarea
          className="sell-description"
          rows={10}
          // placeholder="Description"
          value={motorcycle.description}
          name="description"
          required
          onChange={handleChange}
        />
        <div className="sell-header-price">PRICE</div>
        <input
          className="sell-price"
          // placeholder="Price"
          value={motorcycle.price}
          name="price"
          required
          onChange={handleChange}
        />
        <div className="sell-header-img-link">IMAGE URL</div>
        <input
          className="sell-img-link"
          // placeholder="Image Link"
          value={motorcycle.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <button className="sell-submit" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default MotorcycleSell;
