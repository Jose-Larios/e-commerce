import React from "react";

const Form = ({ handleChange, submit, formData, error }) => {
  return (
    <form onSubmit={submit}>
      {Object.keys(formData).map((key, i) => (
        <div key={i}>
          <label htmlFor={key}>Ingresa {key}</label>
          <input
            type="text"
            name={key}
            onChange={handleChange}
            value={formData[key]}
          />
          {error[key] && <span>{error[key]}</span>}
        </div>
      ))}
      <button>Crear orden</button>
    </form>
  );
};

export default Form;
