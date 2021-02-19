import Layout from "../../components/shared/Layout/Layout";
import { useParams, NavLink, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getMotorcycle, deleteMotorcycle } from "../../services/products";
import "./Manage.css";

function MotorcycleDetail(props) {
  const [motorcycle, setMotorcycle] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getMotorcycle(id);
      setMotorcycle(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = (event) => {
    event.preventDefault();
    const deleted = deleteMotorcycle(motorcycle._id);
    setUpdated(deleted);
  };

  if (isUpdated) {
    return <Redirect to={`/brand/${motorcycle.brand}`} />;
  }

  return (
    <div>
      <Layout user={props.user}>
        <div className="manage-container-logo">
          {motorcycle.brand === "Arch" && (
            <img
              className="manage-logo"
              src="https://www.archmotorcycle.com/assets/images/logo.png"
            />
          )}
          {motorcycle.brand === "Harley Davidson" && (
            <img
              className="manage-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/1200px-Harley-Davidson_logo.svg.png"
            />
          )}
          {motorcycle.brand === "Yamaha" && (
            <img
              className="manage-logo"
              src="https://www.archmotorcycle.com/assets/images/logo.png"
            />
          )}
          {motorcycle.brand === "Ducati" && (
            <img
              className="manage-logo"
              src="https://www.archmotorcycle.com/assets/images/logo.png"
            />
          )}
          {motorcycle.brand === "BMW" && (
            <img
              className="manage-logo"
              src="https://www.archmotorcycle.com/assets/images/logo.png"
            />
          )}
        </div>
        <div className="manage-container">
          <h1 className="manage-name">{motorcycle.name}</h1>
          <img className="manage-img" src={motorcycle.imgURL} />
          <h3 className="manage-description">{motorcycle.description}</h3>
          <h4 className="manage-price">{motorcycle.price}</h4>
          <NavLink className="manage-edit" to={`/edit/${id}`}>
            {" "}
            EDIT
          </NavLink>
          <button
            className="manage-delete"
            onClick={(e) =>
              props.user ? handleDelete(e) : alert("Please Sign up or Sign in")
            }
          >
            DELETE
          </button>
        </div>
      </Layout>
    </div>
  );
}
export default MotorcycleDetail;
