import { signIn, signUp } from "../../services/users";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./SignUp.css";
import Layout from "../../components/shared/Layout/Layout";
import { NavLink } from "react-router-dom";

function SignUp(props) {
  const history = useHistory(); //?

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <div className={form.isError ? "danger" : ""}>
      <Layout user={props.user}>
        <div className="signup-container">
          <h1 className="signup-main-title">Sign Up</h1>
          <form className="signup-form" onSubmit={onSignUp}>
            <label> Username</label>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder=""
              onChange={handleChange}
            />
            <label> Email</label>
            <input
              required
              type="email"
              name="email"
              value={email}
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
            <label>Password Confirmation</label>
            <input
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <button type="submit">CREATE ACCOUNT</button>
          </form>

          <div className="signup-or">OR</div>
          <NavLink className="signup-signin" to="/account">
            SIGN IN
          </NavLink>

          {/* <div>Contact</div> */}
        </div>
      </Layout>
    </div>
  );
}

export default SignUp;
