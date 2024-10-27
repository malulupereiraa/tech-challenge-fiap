import styled from "styled-components";
import { themed } from "../themed";

const StyledHeader = styled.div`
 .menuNameAvatarContainer {
    width: 100%;
    max-width: 1920px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
  }

  .nameAvatarContainer {
    width: 300px;
    max-width: 1920px;
    height: 96px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    color: #fff;
    gap: 25px;
  }

  #clientName {
    margin: 0;
  }

  .avatarIcon {
    width: 40px;
    height: 40px;
  }
`;

export default StyledHeader;
