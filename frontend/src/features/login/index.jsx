import React, { useState } from "react";

import LoginButtonEntity from "../../entities/login";
import PasswordInputEntity from "../../entities/password_input";
import EmailInputEntity from "../../entities/email_input";
import SigninButtonEntity from "../../entities/signin";

function LoginFeature() {
  function message() {
    console.log(formData.email);
    console.log(formData.password);
  }

  const [formData, setFormData] = useState({
    email: "",
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
      <EmailInputEntity onchange={handleInputChange} value={formData.email} />
      <PasswordInputEntity
        onchange={handleInputChange}
        value={formData.password}
      />
      <div className="flex flex-col gap-4">
        <LoginButtonEntity onclick={message} />
        <SigninButtonEntity onclick={message} />
      </div>
    </div>
  );
}

export default LoginFeature;
