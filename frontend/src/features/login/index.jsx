import React, { useState } from "react";

import LoginButtonEntity from "../../entities/login";
import PasswordInputEntity from "../../entities/password_input";
import EmailInputEntity from "../../entities/email_input";
import SigninButtonEntity from "../../entities/signin";
import { loginUser, registerUser } from "./api";

function LoginFeature({ toggleModal }) {
  const handleLogin = async () => {
    try {
      const loginData = await loginUser(formData);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      const registerData = await registerUser(formData);
      handleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="bg-white p-6 rounded shadow-lg flex flex-col fixed z-20">
      <EmailInputEntity
        onchange={handleInputChange}
        value={formData.username}
      />
      <PasswordInputEntity
        onchange={handleInputChange}
        value={formData.password}
      />
      <div className="flex flex-col gap-4">
        <LoginButtonEntity onclick={handleLogin} />
        <SigninButtonEntity onclick={handleRegister} />
      </div>
    </div>
  );
}

export default LoginFeature;
