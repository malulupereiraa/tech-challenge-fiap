import React from 'react';
import { InputBox } from '../../../../@theme/custom/Input';

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, placeholder, type,width }) => {
  return (
    <>
      {type === 'currency' ? (
        <InputBox
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          width={width}
        />
      ) : (
         <InputBox
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          width={width}
           type={type}
        />
      )}
    </>
  );
};

export default CustomInput;
