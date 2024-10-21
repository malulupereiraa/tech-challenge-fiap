import StyledMenu from "@/app/@theme/custom/StyledMenu";
import CloseIcon from "@mui/icons-material/Close";
import Link, { LinkProps } from "next/link";
import useWindowSize from "../../hooks/WindowsSize";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";

export default function AsideMenu() {
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
  };

  const StateLinkProps = ({ href, children, ...rest }: StLinkProps) => {
    const pathname = usePathname();
    console.log(pathname);

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
            {isOpen ? <AsideMenu /> : <></>}
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
          <StateLinkProps href="/" children="Início" />
          <StateLinkProps href="/transferencias" children="Transferências" />
          <StateLinkProps href="/investimentos" children="Investimentos" />
          <StateLinkProps href="/outros" children="Outros serviços" />
        </nav>
      </div>
    </StyledMenu>
  );
}
