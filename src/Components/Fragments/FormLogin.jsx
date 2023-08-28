import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const HanldeLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={HanldeLogin}>
      <InputForm label="Username" type="text" placeholder="Name" name="username" ref={usernameRef} />

      <InputForm label="password" type="password" placeholder="******" name="password" />

      <Button classname="bg-blue-600 w-full hover:bg-slate-700" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
