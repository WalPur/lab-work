import ButtonShared from "../../shared/button";

function SigninButtonEntity({ onclick }) {
  return (
    <ButtonShared text="Зарегистрироваться" style="active" onclick={onclick} />
  );
}

export default SigninButtonEntity;
