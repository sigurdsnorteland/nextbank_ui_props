import { ButtonBaseProps_v1 } from "../ButtonBase/ButtonBaseProps_v1";
export interface ButtonTaskProps_v1 extends ButtonBaseProps_v1 {
    /** icon element shown to the left of the label */
    icon: React.ReactElement;
    onClick: () => void;
}