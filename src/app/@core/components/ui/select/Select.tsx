
import * as S from './style';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 

const SelectComponent = <T,>({
    options,
    optinSelected,
    labelKey,
    valueKey,
    onChange,
    value,
    width,
    height
}: SelectProps<T>) => {

  return (      
    <FormControl fullWidth>
      <S.SelectComponent
        value={value as string} 
        onChange={(e) => onChange(e.target.value as T[keyof T])}
        width={width}
        height={height}
        IconComponent={ArrowDropDownIcon}
        placeholder={optinSelected}  
      >
        <MenuItem value={optinSelected}>
          {optinSelected}
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option[valueKey] as string}>
            {option[labelKey] as string}
          </MenuItem>
        ))}       
        
      </S.SelectComponent>
    </FormControl>
  );
};

export default SelectComponent;