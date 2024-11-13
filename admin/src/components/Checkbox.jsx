import React, { useState } from 'react';

const Checkbox = ({ name, value, onChange }) => {
  const [checked, setChecked] = useState(value);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange({ target: { name, value: newValue } });
  };

  return (
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={handleChange}
      value={checked?true:false}
    />
  );
};

export default Checkbox;
