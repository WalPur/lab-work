import React, { useState, useEffect } from "react";
import LogoShared from "../../shared/logo";
import AuthModalWidget from "../auth_modal";
import LoginButtonEntity from "../../entities/login";
import LogoutFeature from "../../features/logout";

function HeaderWidget() {
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log(storedToken);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <LogoShared />
      <AuthModalWidget showModal={showModal} toggleModal={toggleModal} />
      {token ? <LogoutFeature /> : <LoginButtonEntity onclick={toggleModal} />}
    </div>
  );
}

export default HeaderWidget;
