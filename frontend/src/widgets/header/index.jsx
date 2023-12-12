import React, { useState } from "react";
import LoginFeature from "../../features/login";
import LogoShared from "../../shared/logo";
import AuthModalWidget from "../auth_modal";
import LoginButtonEntity from "../../entities/login";

function HeaderWidget() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <LogoShared />
      <AuthModalWidget showModal={showModal} toggleModal={toggleModal} />
      <LoginButtonEntity onclick={toggleModal} />
    </div>
  );
}

export default HeaderWidget;
