function ButtonShared({ text, style, onclick }) {
  const styles = {
    active: "bg-orange-600 text-white",
    background: "text-white bg-gray-500",
  };
  return (
    <button className={"p-2 rounded " + styles[style]} onClick={onclick}>
      {text}
    </button>
  );
}

export default ButtonShared;
