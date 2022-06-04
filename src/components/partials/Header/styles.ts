import styled from 'styled-components'; 

export const Header = styled.header<{ headerColor: boolean }>`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background-color: ${props => props.headerColor ? '#141414' : 'transparent'};
    transition: all ease .5s;
    
    img {
        height: 30px;
        width: auto; 
    }

    .logo-user {
        height: 50px;
        width: 50px;
        border-radius: 3px;
        background: linear-gradient(to bottom, #0D69E0 30%, #3588f3);
        cursor: pointer;
    }
`;