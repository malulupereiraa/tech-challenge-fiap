import React from 'react';
import * as S from './style';

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, placeholder, type,width }) => {
  return (
    <>
      {type === 'currency' ? (
        <S.InputBox
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          width={width}
        />
      ) : (
         <S.InputBox
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
