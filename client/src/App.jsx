import "./App.css";
import Home from "./screens/Home/Home";
import React, { useState, useEffect } from "react";
import { verifyUser } from "./services/users";
import { Route, Switch, Redirect } from "react-router-dom";
import { getMotorcycles } from "./services/products";
import Brand from "./screens/Brand/Brand";
import Manage from "./screens/Manage/Manage"
import Edit from "./screens/Edit/Edit";
import Sell from "./screens/Sell/Sell";
import Contact from "./screens/Contact/Contact";
import Account from "./screens/Account/Account";
import SignUp from "./screens/SignUp/SignUp"
import SignOut from './screens/SignOut/SignOut'
import SearchResults from './screens/SearchResults/SearchResults'

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    const fetchMotorcycles = async () => {
      const motorcycles = await getMotorcycles();
      setProducts(motorcycles);
    };
    fetchMotorcycles();
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);


  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home user={user} products={products} />
        </Route>
        <Route path="/brand/:id">
          <Brand user={user} products={products} />
        </Route>
        <Route path="/manage/:id">
          <Manage user={user} />
        </Route>
        <Route path="/edit/:id" >
          {user ? <Edit user={user} products={products} /> : <Redirect to="/signup" />}
        </Route>
        <Route path="/sell">
          {user ? <Sell user={user} /> : <Redirect to="/signup" />}
        </Route>
        <Route path="/contact">
          <Contact user={user} />
        </Route>
        <Route path="/account" >
          <Account setUser={setUser} />
        </Route>
        <Route path="/signup" >
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/signout">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route path="/search/:id">
          <SearchResults user={user} products={products} />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
