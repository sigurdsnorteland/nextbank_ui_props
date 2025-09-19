import { Gap } from '../props/Props_v1';
type SizeModifier = GridGapSize | Gap;
interface GridGapSize {
    gap?: Gap;
}
export interface GridProps_v1 {
    /** Specify the internal gutter of the grid */
    gap?: Gap;
    /** Size modifiers for small screen sizes */
    sm?: SizeModifier;
    /** Size modifiers for medium screen sizes */
    md?: SizeModifier;
    /** Size modifiers for large screen sizes */
    lg?: SizeModifier;
};
