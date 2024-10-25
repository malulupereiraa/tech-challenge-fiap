import StyledMenu from "../../../../@theme/custom/StyledMenu";
import CloseIcon from "@mui/icons-material/Close";
import Link, { LinkProps } from "next/link";
import React, { useState } from "react";
import { styled } from "styled-components";
import useWindowSize from "../../hooks/WindowsSize";

export default function AsideMenu({pathname}:{pathname: string}) {
  const StyledLink = styled(Link)`
    @media (max-width: 360px), (min-width: 721px) {
      &.itensMenuBorder {
        border-bottom: 1px solid ${(props) => props.theme.themeColor.primary};
      }
    }
    &.isActive {
      font-weight: 700;
      color: ${(props) => props.theme.themeColor.secondary};
      border-bottom: 1px solid ${(props) => props.theme.themeColor.secondary};
    }
  `;


  type StLinkProps = LinkProps & {
    children: React.ReactNode;
    pathname: string;
  };

  const StateLinkProps = ({ pathname, href, children, ...rest }: StLinkProps) => {

    const isActive = pathname === href.toString();

    return (
      <StyledLink
        href={href}
        className={`${isActive ? "isActive" : ""} ${
          href !== "/outros" ? "itensMenuBorder" : ""
        }`}
        {...rest}
      >
        {children}
      </StyledLink>
    );
  };

  const { width } = useWindowSize();

  const VisibleCloseButton = () => {
    return (
      <>
        {width <= 360 ? (
          <button
            className="iconMenuButton iconCloseButton"
            onClick={toggleMenu}
          >
            <CloseIcon />
            {isOpen ? <AsideMenu pathname={pathname} /> : <></>}
          </button>
        ) : (
          <></>
        )}
      </>
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledMenu className="row no-gutters menuContainer">
        <div className="no-gutters menuContainer">
          <nav className=" itensMenu">
            <VisibleCloseButton />
            <StateLinkProps pathname={pathname} width={width} href="/" children="Início" />
            <StateLinkProps pathname={pathname} width={width} href="/transferencias" children="Transferências" />
            <StateLinkProps pathname={pathname} width={width} href="/investimentos" children="Investimentos" />
            <StateLinkProps pathname={pathname} width={width} href="/outros" children="Outros serviços" />
          </nav>
        </div>
    </StyledMenu>
  );
}
