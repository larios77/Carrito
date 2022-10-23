import "./style.css";

export const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <form className="content_form-login">
          <div className="mb-3">
            <h3 className="mb-3">Registrarte</h3>
            <label for="exampleInputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Registrate
          </button>
        </form>
      </div>
    </>
  );
};
