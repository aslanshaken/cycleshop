import Layout from "../../components/shared/Layout/Layout";
import { useParams, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getMotorcycle, updateMotorcycle } from "../../services/products";
import "./Edit.css";

function MotorcycleEdit(props) {
  const [motorcycle, setMotorcycle] = useState([
    {
      brand: "",
      description: "",
      imgURL: "",
      name: "",
      price: "",
    },
  ]);
  const [isUpdated, setUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getMotorcycle(id);
      setMotorcycle(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMotorcycle({
      ...motorcycle,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(id);
    const updated = await updateMotorcycle(id, motorcycle);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/manage/${id}`} />;
  }

  return (
    <div>
      <Layout user={props.user}>
        <div className="edit-container-logo">
          {motorcycle.brand === "Arch" && (
            <img
              className="edit-logo"
              src="https://www.archmotorcycle.com/assets/images/logo.png"
            />
          )}
          {motorcycle.brand === "Harley Davidson" && (
            <img
              className="edit-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/1200px-Harley-Davidson_logo.svg.png"
            />
          )}
          {motorcycle.brand === "Yamaha" && (
            <img
              className="edit-logo"
              src="https://www.archmotorcycle.com/assets/images/logo.png"
            />
          )}
          {motorcycle.brand === "Ducati" && (
            <img
              className="edit-logo"
              src="https://www.archmotorcycle.com/assets/images/logo.png"
            />
          )}
          {motorcycle.brand === "BMW" && (
            <img
              className="edit-logo"
              src="https://www.archmotorcycle.com/assets/images/logo.png"
            />
          )}
        </div>
        <div>
          <form className="edit-container" onSubmit={handleSubmit}>
            <h1 className="edit-name">{motorcycle.name}</h1>
            <img className="edit-img" src={motorcycle.imgURL} />
            <textarea
              className="edit-description"
              placeholder="Description"
              value={motorcycle.description}
              name="description"
              required
              onChange={handleChange}
            />
            <input
              className="edit-price"
              placeholder="Price"
              value={`${motorcycle.price}`}
              name="price"
              required
              onChange={handleChange}
            />
            <button className="edit-save" type="submit">
              SAVE
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
export default MotorcycleEdit;
