import { ChangeEvent } from "react";
export interface CheckboxProps_v1 {
    /** Removes vertical margins from the checkbox */
    noMargins?: boolean;
    /** If you plan to render the checkbox without a visible label */
    hiddenLabel?: boolean;
    /** Display inline */
    inline?: boolean;
    children: React.ReactNode | ((labelProps: {
        className: string;
        htmlFor: string;
    }) => React.ReactNode);
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}