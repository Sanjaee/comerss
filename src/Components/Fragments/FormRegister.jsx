import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" placeholder="YourName" name="Fullname" />
      <InputForm label="Email" type="email" placeholder="Email@gmail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="******" name="password" />
      <InputForm label="Confirm Password" type="password" placeholder="******" name="confirmPassword" />

      <Button classname="bg-blue-600 w-full hover:bg-slate-700">Register</Button>
    </form>
  );
};

export default FormRegister;
