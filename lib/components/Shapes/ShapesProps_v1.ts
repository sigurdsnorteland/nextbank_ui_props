export type ShapesColor = 'default' | 'subtle';

export interface ShapesProps_v1 {
    /** Sets the mask-position property, setting a px/rem value will move the starting position of the wave */
    position?: string;
    /** Rotate the wave 180 degrees :*/
    flip?: boolean;
    /** Set the background color of the wave container. */
    bgColor?: ShapesColor;
    /** Adds additional class */
    className?: string;
}