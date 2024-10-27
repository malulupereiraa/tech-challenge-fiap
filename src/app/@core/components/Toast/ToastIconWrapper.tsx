import {
  IoIosCheckmarkCircle,
  IoIosCloseCircle,
  IoIosWarning,
  IoIosInformationCircle
} from 'react-icons/io';

export default ({ iconName }: { iconName: string }) => {
  switch(iconName) {
    case 'success':
      return <IoIosCheckmarkCircle color='#3DBD00' />;
    case 'error':
      return <IoIosCloseCircle color='#FF0000' />;
    case 'warning':
      return <IoIosWarning color='#DDAA00' />;
    case 'info':
      return <IoIosInformationCircle color='#00AAFF' />;
    default:
      return <></>;
  }
};
