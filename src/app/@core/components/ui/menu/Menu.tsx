'use client'

import useWindowSize from '../../hooks/WindowsSize';
import AsideMenu from './AsideMenu';




export default function Menu() {

    const { width } = useWindowSize();

    const FixedMenu = () => {
        return (
            <>
                {width <= 360 ? (
                    <></>
                ) : (<AsideMenu />)}
            </>
        )
    }

    return (
        <>
            <FixedMenu />
        </>
    )
}