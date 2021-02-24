import "./styles/BadgeForm.css";
import { useState } from "react";

const BadgeForm = () => {
  const [value, setValue] = useState({ jobTitle: "designers" });

  function handleChange(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick(e) {
    console.log("Button was clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="firstName"
            value={value.firstName}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="lastName"
            value={value.lastName}
          />
        </div>
        <div className="form-group">
          <label>Trabajo</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={value.jobTitle}
          />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="twitter"
            value={value.twitter}
          />
        </div>
        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default BadgeForm;
