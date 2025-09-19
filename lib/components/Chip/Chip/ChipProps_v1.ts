import React, { ElementType } from 'react';
import { ComponentAsPropParams } from '../props/Props_v1';
type LeftIcon = {
    /**  Icon on left side */
    leftIcon?: React.ReactNode;
    rightIcon?: never;
};
type RightIcon = {
    /**  Icon on right side */
    rightIcon?: React.ReactNode;
    leftIcon?: never;
};
type LeftOrRightIcon = LeftIcon | RightIcon;
export type ChipProps_v1<As extends ElementType = 'button'> = ComponentAsPropParams<As> & {
    /** Size of chip*/
    size: 'sm' | 'md' | 'lg';
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
} & LeftOrRightIcon;
