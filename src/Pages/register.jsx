import React from "react";
import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
