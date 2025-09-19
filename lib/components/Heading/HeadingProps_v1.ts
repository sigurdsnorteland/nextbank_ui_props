export enum HeadingSizeEnum_v1 {
    "h1" = 1,
    "h2" = 2,
    "h3" = 3,
    "h4" = 4,
    "h5" = 5,
    "h6" = 6,
}

export type HeadingProps_v1 = {
    color?: string;
    error?: boolean;
    inline?: boolean;
    size?: HeadingSizeEnum_v1;
    noMargin?: boolean;
    withBorder?: boolean;
    textCenter?: boolean;
}