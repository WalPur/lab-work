import InputShared from "../../shared/input";

function EmailInputEntity({ onchange, value }) {
  return (
    <InputShared
      onchange={onchange}
      value={value}
      params={{ type: "text", name: "username", placeholder: "email" }}
    />
  );
}

export default EmailInputEntity;
