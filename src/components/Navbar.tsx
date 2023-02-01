import { useState } from 'react';

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  ExtendedNavbarInner,
  ExtendedNavbarContainer,
  OpenLinksButton,
  NavbarLinkExtended,
} from '../styles/Navbar.style';
import logoImg from '../assets/logo.png';

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <ExtendedNavbarInner>
        <LeftContainer>
          <NavbarLinkExtended to="/">
            <Logo src={logoImg} />
          </NavbarLinkExtended>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/login">Login</NavbarLink>
            <OpenLinksButton onClick={() => setExtendNavbar((state) => !state)}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </ExtendedNavbarInner>
      {extendNavbar && (
        <ExtendedNavbarContainer>
          <NavbarLinkExtended to="/login">Login</NavbarLinkExtended>
        </ExtendedNavbarContainer>
      )}
    </NavbarContainer>
  );
};
