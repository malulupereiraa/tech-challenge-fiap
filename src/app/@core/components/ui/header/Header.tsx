'use client'
import Image from 'next/image';
import { themed } from '../../../../@theme/themed';
import AvatarIcon from '../../icons/Avatar.svg';
import useWindowSize from '../../hooks/WindowsSize';
import MenuButton from '../menu/MenuButton';
import StyledHeader from '@/app/@theme/custom/StyledHeader';
import AsideMenu from '../menu/AsideMenu';

interface TituloProps {
    name: string;
}

export default function Header(props: TituloProps) {
    const { width } = useWindowSize();

    const IconHeader = () => {
        return (
            <>
                {width <= 360 ? (
                    <MenuButton />
                ) : width <= 360 && width <= 720 ? (
                    <AsideMenu />
                ): (
                    <></>
                )}
            </>
        )
    }
    const NameHeader = () => {
        return (
            <>
                {width <= 360 ? (
                    <>
                        <p></p>
                    </>
                ) : (
                    <><p id='clientName'>{props.name}</p></>
                )}
            </>
        )
    }

    return (
            // não consegui fazer funcionar o estilo no Styled Component Costumizado
            <StyledHeader className="row no-gutters" style={{ backgroundColor: themed.themeColor.primary, color: themed.themeColor.secondary, display: 'flex', justifyContent: 'center' }}>
                <div className="menuNameAvatarContainer">
                    <IconHeader />
                    <div className="nameAvatarContainer">
                        <NameHeader />
                        <Image alt='avatar' src={AvatarIcon} className="avatarIcon" />
                    </div>
                </div>
            </StyledHeader>
      )
}


