import { BackgroundColor, Margin, Padding } from '../props/Props_v1';
interface GridRowSize {
    margin?: Margin;
    padding?: Padding;
}
type SizeModifier = GridRowSize | Margin | Padding;
export interface GridRowProps_v1 {
    /** Padding in the top and bottom of the row */
    padding?: Padding;
    /** Margin in the top and bottom of the row */
    margin?: Margin;
    /**
     * Supported background colors
     *
     * Property has new values that work with dark and accent mode as part of the Semantic Color update
     * Possible values: `primary` `secondary` `tertiary`
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)
     */
    bgColor?: BackgroundColor;
    /** Size modifiers for small screen sizes */
    sm?: SizeModifier;
    /** Size modifiers for medium screen sizes */
    md?: SizeModifier;
    /** Size modifiers for large screen sizes */
    lg?: SizeModifier;
};