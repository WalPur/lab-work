import TextInputEntity from "../../entities/text_input";

function TextInputFeature({ name, value }) {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <TextInputEntity name={name} value={value} onchange={handleInputChange} />
  );
}

export default TextInputFeature;
