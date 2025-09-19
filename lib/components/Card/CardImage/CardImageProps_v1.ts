export interface CardImageProps_v1 {
    /** The src for the image */
    imageSrc: string;
    /** The alt text for the image */
    imageAltText: string;
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