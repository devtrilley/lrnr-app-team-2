import React, { useEffect, useState } from "react";
import M from "materialize-css";

export default function Header() {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    // Initialize the Materialize select component
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="input-field col s12">
      <select value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          Choose your option
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <label>Materialize Select</label>
    </div>
  );
}