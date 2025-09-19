import { BackgroundColor, SizeModifier } from '../props/Props_v1';
export interface GridColProps_v1 {
    /**
     * Supported background colors
     *
     * Property has new values that work with dark and accent mode as part of the Semantic Color update
     * Possible values: `primary` `secondary` `tertiary`
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)
     */
    bgColor?: BackgroundColor;
    /** Center text content horizontally */
    centerText?: boolean;
    /** Center content vertically */
    center?: boolean;
    /** Size modifiers for small screen sizes */
    sm?: SizeModifier;
    /** Size modifiers for medium screen sizes */
    md?: SizeModifier;
    /** Size modifiers for large screen sizes */
    lg?: SizeModifier;
};
