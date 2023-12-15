import InputShared from "../../shared/input";

function EmailInputEntity({ onchange, value, name }) {
  return (
    <>
      <label>
        {name}
        <InputShared
          onchange={onchange}
          value={value}
          params={{ type: "radio", name: "categories" }}
        />
      </label>
    </>
  );
}

export default EmailInputEntity;
