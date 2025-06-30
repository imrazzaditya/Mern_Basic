import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Submitted Data:", formData);
    alert(`Hello ${formData.name} from ${formData.city}!`);
    // You can reset the form if needed:
    // setFormData({ name: "", city: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>City: </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
