import styled from "styled-components";



const StyledHeader = styled.div`
 .headerContainer{
    width: 100%;
    max-width: 1920px;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;


}

.menuNameAvatarContainer{
    width: 100%;
    max-width: 1024px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
}

.nameAvatarContainer{
    width: 300px;
    max-width: 1920px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #fff;
}

#clientName{
    margin: 0;
}


.avatarIcon{
    width: 40px;
    height: 40px;
}
`;

export default StyledHeader;

