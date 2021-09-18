import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogin, startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formLoginValues, handleInputChange] = useForm({
    loginEmail: "",
    loginPassword: "",
  });

  const [formRegisterValues, handleregisterInputChange] = useForm({
    registerName: "",
    registerEmail: "",
    registerPassword1: "",
    registerPassword2: "",
  });

  const { loginEmail, loginPassword } = formLoginValues;

  const { registerName, registerEmail, registerPassword1, registerPassword2 } =
    formRegisterValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(loginEmail, loginPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerPassword1 !== registerPassword2) {
      return Swal.fire("Error", "Password should be the same", "error");
    }
    dispatch(startRegister(registerName, registerEmail, registerPassword1));
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="loginEmail"
                value={loginEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="loginPassword"
                value={loginPassword}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="registerName"
                value={registerName}
                onChange={handleregisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="registerEmail"
                value={registerEmail}
                onChange={handleregisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="registerPassword1"
                value={registerPassword1}
                onChange={handleregisterInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password"
                name="registerPassword2"
                value={registerPassword2}
                onChange={handleregisterInputChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
