export interface CardTextProps_v1{
    /** Left-aligned text on the card */
    leftAlign?: boolean;
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