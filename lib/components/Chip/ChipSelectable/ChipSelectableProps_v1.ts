import { ElementType } from 'react';
import { ChipProps_v1 } from "../Chip/ChipProps_v1";
export type ChipSelectableProps_v1<As extends ElementType = 'button'> = ChipProps_v1<As> & {
    /** Whether this chips is selected */
    isSelected?: boolean;
    onClick: () => void;
}
