import ButtonShared from "../../shared/button";

function LogoutEntity({ onclick }) {
  return <ButtonShared text="Выйти" style="background" onclick={onclick} />;
}

export default LogoutEntity;
