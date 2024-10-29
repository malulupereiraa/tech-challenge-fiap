import styled, { css } from 'styled-components';
import Select from '@mui/material/Select';
import { themed } from '../themed';

interface CustomStyleSelectProps {
    width?: string | number | undefined;
    height?: string | number | undefined;
}

export const SelectComponentStyle = styled(Select) <CustomStyleSelectProps>`
  ${({ width, height }) => css`
    width: ${width || '100%'};
    height: ${height || '48px'};
    background: ${themed.themeColor.white};
    border: 1px solid ${themed.themeColor.primary};
    border-radius: 8px !important;
    text-align: left;
    color: ${themed.themeColor.grey} !important;

    &:focus {
      border: 1px solid ${themed.themeColor.primary}; /* Mantém a mesma cor de borda em foco */
      background: ${themed.themeColor.white}; /* Mantém a mesma cor de fundo em foco */
      outline: none !important; /* Remove o contorno padrão */
    }

    //cor do icon
    .MuiSelect-icon {
      color: ${themed.themeColor.primary};
    }

    //cor da borda quando recebe o foco
    fieldset.MuiOutlinedInput-notchedOutline.mui-1d3z3hw-MuiOutlinedInput-notchedOutline {
      border-color: ${themed.themeColor.primary} !important; 
    }

  `}
`;
