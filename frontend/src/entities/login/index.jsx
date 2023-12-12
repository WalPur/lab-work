import ButtonShared from "../../shared/button";

function LoginButtonEntity({ onclick }) {
  return <ButtonShared text="Войти" style="background" onclick={onclick} />;
}

export default LoginButtonEntity;
