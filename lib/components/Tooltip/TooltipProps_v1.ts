export interface TooltipProps_v1 extends Pick<React.ComponentProps<'button'>, 'aria-controls' | 'aria-label' | 'children' | 'className' | 'onClick' | 'tabIndex'> {
    containerProps?: React.ComponentPropsWithoutRef<'div'>;
    isOpen?: boolean;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}