import React from "react";
import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
