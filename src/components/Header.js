import styled from 'styled-components'

const Header = (props) => {
    return <Nav>
        Header</Nav>
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 36px;
    transform: translateZ(0);
    transition: opacity 0.5s ease-out; 
    letter-spacing: 16px;
    z-index: 3;
`;

export default Header;