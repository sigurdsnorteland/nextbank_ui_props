import { ButtonBaseProps_v1 } from "../ButtonBase/ButtonBaseProps_v1";
export interface ButtonExpandProps_v1 extends ButtonBaseProps_v1 {
     /** An accessible label for the close-button, only shown in the "isExpanded" state  */
    closeLabel?: string;
    /** When true the component will render a circle with an X indicating whatever is controlled is in an expanded state. */
    isExpanded: boolean;
    size?: "sm" | "md" | "lg";
    onClick: () => void;
}