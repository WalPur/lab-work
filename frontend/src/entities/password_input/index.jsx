import InputShared from "../../shared/input";

function PasswordInputEntity({ onchange, value }) {
  return (
    <InputShared
      onchange={onchange}
      value={value}
      params={{ type: "password", name: "password", placeholder: "password" }}
    />
  );
}

export default PasswordInputEntity;
