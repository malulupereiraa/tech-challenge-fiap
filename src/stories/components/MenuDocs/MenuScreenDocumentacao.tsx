import StyledMenuScreen from "@/stories/components/MenuDocs/styles/StyledMenuScreen";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { styled } from "styled-components";

export default function MenuScreenDocumentacao() {
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

  return (
    <StyledMenuScreen className="row no-gutters menuContainer">
      <div className="no-gutters menuContainer">
        <nav className=" itensMenu">
          <StateLinkProps href="/" children="Início" />
          <StateLinkProps href="/transferencias" children="Transferências" />
          <StateLinkProps href="/investimentos" children="Investimentos" />
          <StateLinkProps href="/outros" children="Outros serviços" />
        </nav>
      </div>
    </StyledMenuScreen>
  );
}
