import "./styles/BadgeForm.css";

const BadgeForm = ({ onChange, formValues, onSubmit, error }) => {
  function handleClick(e) {
    console.log("Button was clicked");
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formValues);
  // }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="firstName"
            value={formValues.firstName}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="lastName"
            value={formValues.lastName}
          />
        </div>
        <div className="form-group">
          <label>Trabajo</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={formValues.jobTitle}
          />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="twitter"
            value={formValues.twitter}
          />
        </div>
        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default BadgeForm;
