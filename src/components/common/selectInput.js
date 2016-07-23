import React, {PropTypes} from 'react';

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOptions,
  value,
  error,
  options = []
}) => {
  let SelectInput = 'form-group';

  return(
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOptions}</option>
          {options.map( option => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  defaultOptions:PropTypes.string,
  value:PropTypes.string,
  error:PropTypes.string,
  options:PropTypes.array(PropTypes.object)
};

export default SelectInput;
