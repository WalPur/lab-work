import LogoutEntity from "../../entities/logout";

function LogoutFeature() {
  function logout() {
    localStorage.removeItem("token");
    location.reload();
  }
  return <LogoutEntity onclick={logout} />;
}

export default LogoutFeature;
