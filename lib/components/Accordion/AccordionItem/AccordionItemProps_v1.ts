export interface AccordionItemProps_v1 {
    /** The heading */
    heading: NonNullable<React.ReactNode> | "";
    /** The content to appear when expanded */
    children?: NonNullable<React.ReactNode> | "";
    /** Should it be open by default */
    defaultOpen?: boolean;
    /** Is the item open or collapsed? Used for overriding default behaviour */
    isOpen?: boolean;
    /** Callback when the item is open/closed */
    onToggleOpen?: (isOpen: boolean) => void;
    /** aria-label for the button */
    ariaLabel?: string;
    /** Ingen padding i body-elementet hvis man ønsker egen styling */
    noPadding?: boolean;
}