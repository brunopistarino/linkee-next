import { useState } from "react";
import axios from "axios";

import { ReactComponent as LogoIcon } from "../icons/logo.svg";
import { ReactComponent as GoogleIcon } from "../icons/google.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    axios
      .post("/api/login", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  return (
    // <div id="login-view">
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={({ target }) => setUsername(target.value)}
    //     />
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={({ target }) => setPassword(target.value)}
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    //   {error && <p>{error}</p>}
    // </div>
    <div id="login-view">
      <section className="form-section">
        <div className="container">
          <main>
            <div className="welcome">
              <LogoIcon />
              <div>
                <h2>Welcome back</h2>
                <p>Welcome back! Please enter your details.</p>
              </div>
            </div>
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    // value={username}
                    // onChange={({ target }) => setUsername(target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    // value={password}
                    // onChange={({ target }) => setPassword(target.value)}
                  />
                </div>
              </form>
              <div className="actions">
                <button className="btn-primary">Sign in</button>
                <button className="btn-social">
                  <GoogleIcon /> Sign in with Google
                </button>
              </div>
            </div>
            <div className="sign-up">
              <p>Don't have an account?</p>
              <a href="/register">Sign up</a>
            </div>
          </main>
        </div>
        <div className="footer">
          <p>© Linkee 2022</p>
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  );
};

export default Login;
