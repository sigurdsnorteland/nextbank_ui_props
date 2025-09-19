import { ElementType } from "react";
import { BackgroundColor, ComponentAsPropParams } from "../props/Props_v1";
export type CardBaseProps_v1<As extends ElementType = "div"> = Omit<ComponentAsPropParams<As>, "children"> & {
    /** No margin on card */
    noMargin?: boolean;
    textCenter?: boolean;
    /**
     * Property has new values that work with dark and accent mode as part of the Semantic Color update
     * Possible values: `primary` `secondary` `tertiary`
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)
     */
    bgColor?: BackgroundColor;
    /** @deprecated as part of update to Semantic Colors
     *
     * Property is replaced by the updated values for `bgColor` that works on dark mode
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    bgDarkmodeColor?: never;
    noPadding?: boolean;
    /** Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: "accent" */
    appearance?: "default" | "accent";
};