import LoginFeature from "../../features/login";

function AuthModalWidget({ showModal, toggleModal }) {
  return (
    showModal && (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div
          className="fixed inset-0 flex z-20 bg-gray-800 bg-opacity-75"
          onClick={toggleModal}
        ></div>
        <LoginFeature />
      </div>
    )
  );
}

export default AuthModalWidget;
