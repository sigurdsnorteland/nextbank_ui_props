import { ReactElement } from 'react';

export interface CardProps_v1 {
    background?: string;
    backgroundHovered?: string;
    border?: string;
    borderHovered?: string;
    borderRadius?: string;
    justifyContent?: string;
    textAlign?: string;

    name?: string;
    nameLink?: boolean
    title?: string;
    titleLink?: boolean
    titleSize?: 'small' | 'medium' | 'large';
    subtext?: string;
    subtextLink?: boolean
    text?: string;
    textLink?: boolean

    contentLeft?: ReactElement;
    contentRight?: ReactElement;

    condensed?: boolean;
    noMargin?: boolean;
    appearance?: 'default' | 'accent';

    onClick?: () => void;
};