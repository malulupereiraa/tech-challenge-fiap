"use client";
import Image from "next/image";
import { themed } from "../../../../@theme/themed";
import AvatarIcon from "../../icons/Avatar.svg";
import useWindowSize from "../../hooks/WindowsSize";
import MenuButton from "../menu/MenuButton";
import StyledHeader from "@/app/@theme/custom/StyledTransactionsHeader";
import AsideMenu from "../menu/AsideMenu";
import { usePathname } from "next/navigation";

interface TituloProps {
  name: string;
}

export default function TransactionsHeader(props: TituloProps) {
  const pathname = usePathname();
  const { width } = useWindowSize();

  const IconHeader = () => {
    if (width <= 360) return <MenuButton pathname={pathname} />;
  };

  const NameHeader = () => {
    if(width > 360)
        return <p id='clientName'>{props.name}</p>;
  };

  return (
    // não consegui fazer funcionar o estilo no Styled Component Costumizado
    <StyledHeader
      className="row no-gutters menu-container"
      style={{
        backgroundColor: themed.themeColor.primary,
        color: themed.themeColor.secondary,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="menuNameAvatarContainer">
        <IconHeader />
        <div className="nameAvatarContainer">
          <NameHeader />
          <Image alt="avatar" src={AvatarIcon} className="avatarIcon" />
        </div>
      </div>
    </StyledHeader>
  );
}
