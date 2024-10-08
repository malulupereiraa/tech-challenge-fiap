'use client'
import useWindowSize from '../../hooks/WindowsSize';import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


export default function IconDisplay(){

    const IconDisplay = () => {
        const { width } = useWindowSize();
        return (
            <>
                {width <= 360 ? (<span><MenuOutlinedIcon /></span>) : (<span></span>)}
            </>
        )
    }

}


