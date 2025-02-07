import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./Api"; // Import login function from Api.jsx
import logo from "../../assets/img/logo-light.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(email, password);

    if (result.success) {
      navigate("/dashboard"); // Redirect on success
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <div className="d-flex flex-column h-100 p-3">
        <div className="d-flex flex-column flex-grow-1">
          <div className="row h-100">
            <div className="col-xxl-7">
              <div className="row justify-content-center h-100">
                <div className="col-lg-6 py-lg-5">
                  <div className="d-flex flex-column h-100 justify-content-center">
                    <div className="auth-logo mb-1">
                      <img src={logo} height="40" alt="logo" />
                    </div>

                    <h2 className="fw-bold fs-24">Sign In</h2>
                    <p className="text-muted mt-1 mb-4">
                      Enter your email and password to access the Vendor panel.
                    </p>

                    {error && <p className="text-danger text-center">{error}</p>}

                    <form onSubmit={handleSubmit} className="authentication-form">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3 text-center d-grid">
                        <button className="btn btn-soft-primary" type="submit">
                          Sign In
                        </button>
                      </div>
                    </form>

                    <p className="text-danger text-center">
                      Don't have an account?{" "}
                      <Link to="/setup" className="text-dark fw-bold ms-1">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-xxl-5 d-none d-xxl-flex">
              <div className="card h-100 mb-0 overflow-hidden">
                <div className="d-flex flex-column h-100">
                  <img src="assets/images/small/img-10.jpg" alt="" className="w-100 h-100" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
