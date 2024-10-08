'use client'
import Image from 'next/image';
import { themed } from '../../../../@theme/themed';
import AvatarIcon from '../../icons/Avatar.svg';
import styleHeader from '../../../../@theme/styles/Header.module.css';
import useWindowSize from '../../hooks/WindowsSize';
import MenuButton from '../menu/MenuButton';

interface TituloProps {
    nome: string;
}

export default function Header(props: TituloProps) {
    const { width } = useWindowSize();

    const IconDisplay = () => {
        return (
            <>
                {width <= 360 ? (
                    <MenuButton/>
                ) : (
                    <></>
                )}
            </>
        )
    }
    const NameDisplay = () => {
        return (
            <>
                {width <= 360 ? (
                    <>
                        <p></p>
                    </>
                ) : (
                    <><p id='client/name'>{props.nome}</p></>
                )}
            </>
        )
    }

    return (
        <div className={styleHeader.headerContainer} style={{ backgroundColor: themed.themeColor.primary, color: themed.themeColor.secondary }}>
            <div className={styleHeader.menuNameAvatarContainer}>
            <IconDisplay />
                <div className={styleHeader.nameAvatarContainer}>
                    <NameDisplay />
                    <Image alt='avatar' src={AvatarIcon} className={styleHeader.avatarIcon} />
                </div>
            </div>
        </div>
    )
}


