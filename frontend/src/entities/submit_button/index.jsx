import ButtonShared from "../../shared/button";

function SubmitEntity({ onclick }) {
  return <ButtonShared text="Отправить" style="active" onclick={onclick} />;
}

export default SubmitEntity;
