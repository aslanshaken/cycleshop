import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Account.css";
import Layout from "../../components/shared/Layout/Layout";
import { NavLink } from "react-router-dom";

function Account(props) {
  const history = useHistory(); //?

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        //?
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
        });
      });
  };

  const { username, password } = form;

  return (
    <div className={form.isError ? "danger" : ""}>
      <Layout user={props.user}>
        <div className="account-container">
          <h1 className="account-main-title">Sign In</h1>
          <form className="account-form" onSubmit={onSignIn}>
            <label> Username</label>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder=""
              onChange={handleChange}
            />
            <label> Password</label>
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder=""
              onChange={handleChange}
            />
            <button type="submit">SIGN IN</button>
          </form>

          <div className="account-or">OR</div>
          <NavLink className="account-create-account" to="/signup">
            Create Account
          </NavLink>
          {/* <div>Contact</div> */}
        </div>
      </Layout>
    </div>
  );
}

export default Account;
