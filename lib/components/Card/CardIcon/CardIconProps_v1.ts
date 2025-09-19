import { ReactElement, MouseEventHandler } from "react";
export interface CardIconProps_v1 {
    /** Element of icon */
    icon?: ReactElement;
    rightIcon?: ReactElement;
    /** Smaller icon and less space */
    condensed?: boolean;
    /** No margin on card */
    noMargin?: boolean;
    /** Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' */
    appearance?: 'default' | 'accent';
    //children?: React.ReactNode | ((cardRenderProps: CardRenderProps) => React.ReactNode);

    name?: string;
    title?: string;
    subtext?: string;
    text?: string;
    href?: string;

    icon_left?:any;
    icon_left_size?:'sm' | 'md' | 'lg' | 'xl';
    icon_right?:any;
    icon_right_size?:'sm' | 'md' | 'lg' | 'xl';
};