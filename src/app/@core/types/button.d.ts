/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ButtonProps {
    // isOpen: boolean;
    /** Icon of Button */
    icon?: ReactElement<SVGElement, string | JSXElementConstructor<any>>;
    /** Label Button: string */
    label?: string;
    size?: "sm" | "lg" | undefined;
    /** If button is disabled: boolean */
    disabled: boolean;
    rounded?: boolean;    
    variant?: string;
     /** Optional click handler */
    onClick?: () => void;
    // body: any;
    // sizeModal?: any;
    // hasFooter: boolean;
    // footer?: any;
    // center?: boolean;
    // onSubmitAction?: (value: any) => void;
    // onCloseAction: () => any;
}
  