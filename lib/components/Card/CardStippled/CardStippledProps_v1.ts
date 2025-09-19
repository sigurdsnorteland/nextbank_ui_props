import { ReactNode } from 'react';

export  type Img = {
    element: ReactNode;
    type: 'icon' | 'custom';
};

export interface CardStippledProps_v1{
    /** Smaller icon and less space */
    condensed?: boolean;
    /** Image to be rendered*/
    img?: Img;
    rightImg?: Img;
    /** No margin on card */
    noMargin?: boolean;
    //children: React.ReactNode | ((cardRenderProps: CardRenderProps) => React.ReactNode);

    name?:string;
    title?:string;
    subtext?:string;
    text?:string;
    href?: string;
};