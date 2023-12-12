function InputShared({ value, onchange, params }) {
  return (
    <input
      type={params["type"]}
      name={params["name"]}
      value={value}
      onChange={onchange}
      placeholder={params["placeholder"]}
      className="border-2 border-gray-300 mb-4 p-2 rounded"
    />
  );
}

export default InputShared;
