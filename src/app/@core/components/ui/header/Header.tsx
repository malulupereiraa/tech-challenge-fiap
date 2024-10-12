'use client'
import StyledHeader from '@/app/@theme/custom/StyledHeader';
import Image from 'next/image';
import styleHeader from '../../../../@theme/styles/Header.module.css';
import { themed } from '../../../../@theme/themed';
import useWindowSize from '../../hooks/WindowsSize';
import AvatarIcon from '../../icons/Avatar.svg';
import AsideMenu from '../menu/AsideMenu';
import MenuButton from '../menu/MenuButton';

interface TituloProps {
    nome: string;
}

export default function Header(props: TituloProps) {
    const { width } = useWindowSize();

    const IconHeader = () => {
        return (
            <>
                {width <= 360 ? (
                    <MenuButton />
                ) : width <= 360 && <AsideMenu/> ? (
                    <></>
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
                    <><p id='clientName'>{props.nome}</p></>
                )}
            </>
        )
    }

    return (
            <StyledHeader className="row no-gutters" style={{ backgroundColor: themed.themeColor.primary, color: themed.themeColor.secondary }}>
                <div className={styleHeader.menuNameAvatarContainer}>
                    <IconHeader />
                    <div className={styleHeader.nameAvatarContainer}>
                        <NameHeader />
                        <Image alt='avatar' src={AvatarIcon} className={styleHeader.avatarIcon} />
                    </div>
                </div>
            </StyledHeader>
      )
}


