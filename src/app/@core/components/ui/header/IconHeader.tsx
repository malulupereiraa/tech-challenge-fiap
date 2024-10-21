'use client'
import useWindowSize from '../../hooks/WindowsSize';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const IconHeader: React.FC = () => {
    const { width } = useWindowSize();
    return (
      <>
        {width <= 360 ? <span><MenuOutlinedIcon /></span> : <span></span>}
      </>
    );
  };
  
  export default IconHeader;


