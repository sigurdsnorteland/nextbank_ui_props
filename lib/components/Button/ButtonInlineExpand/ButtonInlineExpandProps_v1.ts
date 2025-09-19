import { ButtonBaseProps_v1 } from "../ButtonBase/ButtonBaseProps_v1";
export interface ButtonInlineExpandProps_v1 extends ButtonBaseProps_v1 {
    /** When true it will indicate the button is in its open state */
    isExpanded: boolean;
    onClick: () => void;
}