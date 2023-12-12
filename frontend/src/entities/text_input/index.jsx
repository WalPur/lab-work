import InputShared from "../../shared/input";

function TextInputEntity({ onchange, value, name }) {
  return (
    <InputShared
      onchange={onchange}
      value={value}
      params={{ type: "text", name: { name }, placeholder: { name } }}
    />
  );
}

export default TextInputEntity;
