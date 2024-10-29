import styled, { css } from 'styled-components';
import { themed } from '../themed';

interface CustomStyleInputProps {
    width?: string | number | undefined;
    height?: string | number | undefined;
}

export const InputBox = styled.input<CustomStyleInputProps>`
  ${({ width, height }) => css`
    width: ${width || '100%'};
    height: ${height || '48px'};
    border: 1px solid ${themed.themeColor.primary};
    border-radius: 8px;
    text-align: center;
    color: ${themed.themeColor.grey};

    &:focus {
      outline: ${themed.themeColor.primary};
  `}
`;