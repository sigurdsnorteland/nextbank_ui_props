export interface SpinnerProps_v1 {
    immediate?: boolean;
    large?: boolean;
    loadingText?: React.ReactNode;
    /** 'nb', 'nn', or 'en' */
    locale?: 'nb' | 'nn' | 'en';
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}