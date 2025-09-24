export type ButtonBaseProps_v1 = {
    ariaLoadingMessage?: string;
    buttonType?: "action" | "primary" | "secondary" | "shortcut" | "task";
    isDisabled?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    /** Size of the button, default md. */
    size?: "sm" | "md" | "lg";
    /** Using only an icon, no label */
    iconOnly?: boolean;
    onClick: () => void;
    className?: string;

    /** nextbank */
    width?: string | number;
    backgroundColor?: string;
}