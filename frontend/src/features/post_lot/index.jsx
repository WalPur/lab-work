import React, { useState } from "react";

import TextInputEntity from "../../entities/text_input";
import SubmitEntity from "../../entities/submit_button";
import { createLot } from "./api";
import { getRadio } from "./mock";

function LotCreateFeature({ toggleModal }) {
  const handleSubmit = async () => {
    try {
      const createData = await createLot(formData);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };
  const radios = getRadio();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categories: [],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      const updatedCategories = [...formData.categories];
      if (updatedCategories.includes(value)) {
        const index = updatedCategories.indexOf(value);
        updatedCategories.splice(index, 1);
      } else {
        updatedCategories.push(Number(value));
      }
      setFormData({
        ...formData,
        categories: updatedCategories,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  return (
    <div className="bg-white p-6 rounded shadow-lg flex flex-col fixed z-20">
      <TextInputEntity
        onchange={handleInputChange}
        value={formData.name}
        name="name"
      />
      <TextInputEntity
        onchange={handleInputChange}
        value={formData.description}
        name="description"
      />
      <div className="flex flex-col mb-4">
        {radios.map((radio) => (
          <label className="flex gap-5" key={radio.value}>
            <input
              type="checkbox"
              name={radio.name}
              value={radio.value}
              id={radio.name + radio.value}
              checked={formData.categories.includes(radio.value)}
              onChange={handleInputChange}
            />
            {radio.label}
          </label>
        ))}
      </div>
      <SubmitEntity onclick={handleSubmit} />
    </div>
  );
}

export default LotCreateFeature;
