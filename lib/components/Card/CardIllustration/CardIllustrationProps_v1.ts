import {ReactElement} from "react";
export interface CardIllustrationProps_v1 {
    /** Element of illustration */
    img: ReactElement;
    /** Smaller illustration and less space */
    condensed?: boolean;
    /** Position illustration at left (default) or right of the card content */
    illustrationPosition?: 'right' | 'left';
    /** No margin on card */
    noMargin?: boolean;
    /** Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' */
    appearance?: 'default' | 'accent';

    name?: string;
    title?: string;
    subtext?: string;
    text?: string;
    href?: string;
};