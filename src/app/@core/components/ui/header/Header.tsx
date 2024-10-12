'use client'
import Image from 'next/image';
import { themed } from '../../../../@theme/themed';
import AvatarIcon from '../../icons/Avatar.svg';
import styleHeader from '../../../../@theme/styles/Header.module.css';
import useWindowSize from '../../hooks/WindowsSize';
import MenuButton from '../menu/MenuButton';
import StyledHeader from '@/app/@theme/custom/StyledHeader';

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
                ) : (
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
        <div className="row no-gutters">
            <StyledHeader style={{ backgroundColor: themed.themeColor.primary, color: themed.themeColor.secondary }}>
                <div className={styleHeader.menuNameAvatarContainer}>
                    <IconHeader />
                    <div className={styleHeader.nameAvatarContainer}>
                        <NameHeader />
                        <Image alt='avatar' src={AvatarIcon} className={styleHeader.avatarIcon} />
                    </div>
                </div>
            </StyledHeader>
        </div>
    )
}


