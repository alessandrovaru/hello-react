import "./styles/BadgeForm.css";

const BadgeForm = () => {
  function handleChange(e) {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  }

  function handleClick(e) {
    console.log("Button was clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();
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
