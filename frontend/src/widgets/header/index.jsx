import React, { useState, useEffect } from "react";
import LogoShared from "../../shared/logo";
import AuthModalWidget from "../auth_modal";
import LoginButtonEntity from "../../entities/login";
import LogoutFeature from "../../features/logout";
import SubmitEntity from "../../entities/submit_button";
import LotDataModal from "../lot_modal";

function HeaderWidget() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLotModal, setShowLotModal] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log(storedToken);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };
  const toggleLotModal = () => {
    setShowLotModal(!showLotModal);
  };
  return (
    <div className="border-b border-gray-300">
      <div className="container mx-auto my-5 flex gap-5 items-center">
        <LogoShared />
        <AuthModalWidget
          showModal={showLoginModal}
          toggleModal={setShowLoginModal}
        />
        <LotDataModal showModal={showLotModal} toggleModal={setShowLotModal} />
        {token ? (
          <div className="flex gap-5">
            <SubmitEntity onclick={toggleLotModal} />
            <LogoutFeature />
          </div>
        ) : (
          <LoginButtonEntity onclick={toggleLoginModal} />
        )}
      </div>
    </div>
  );
}

export default HeaderWidget;
