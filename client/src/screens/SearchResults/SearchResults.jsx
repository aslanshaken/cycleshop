import { useParams, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./SearchResults.css";
import Layout from "../../components/shared/Layout/Layout";
// import { set } from "mongoose";

function SearchResults(props) {
  const { id } = useParams();
  const [toggle, setToggle] = useState(true);

  function Check() {
    return props.products.map((product, index) => {
      if (product.name.toLowerCase().includes(id.toLowerCase())) {
        return (
          <div className="search-container" key={index}>
            <div className="search-name">{product.name}</div>

            <div className="search-img">
              <img src={product.imgURL} alt={product.name} />
            </div>

            <div className="search-price">{product.price}</div>

            <NavLink className="search-manage" to={`/manage/${product._id}`}>
              Manage
            </NavLink>

            <NavLink className="search-sell" to="/sell">
              sell
            </NavLink>
          </div>
        );
      }
    });
  }

  return (
    <div>
      <Layout user={props.user}>
        <div className="search-container-logo">
          <h1 className="search-logo"> Search Results</h1>
        </div>
        <div>{Check()}</div>
      </Layout>
    </div>
  );
}

export default SearchResults;
