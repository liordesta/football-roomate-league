import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav<{ extendNavbar: boolean }>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background-color: #60777f;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 70%;
  padding-left: 2%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  padding-right: 2%;
  align-items: center;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 22px;
  font-family: sans-serif;
  text-decoration: none;
  margin: 10px;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;

  &:hover {
    color: #3d4b4f;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 22px;
  font-family: sans-serif;
  text-decoration: none;
  margin: 10px;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
`;

export const Logo = styled.img`
  max-width: 192px;
  height: 40px;
  margin: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ExtendedNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ExtendedNavbarInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
