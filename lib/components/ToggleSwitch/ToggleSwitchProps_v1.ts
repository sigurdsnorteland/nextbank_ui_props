export interface ToggleSwitchProps_v1 extends React.ComponentPropsWithoutRef<'input'> {
    /** A second line of text in the label */
    locale?: 'nb' | 'nn' | 'en';
    /** On/Off text language */
    description?: string;
    /** Custom text to specify the on-option */
    onText?: string;
    /** Custom text to specify the off-option */
    offText?: string;
    /** Hide On & Off labels next to switch */
    hideOnOff?: boolean;
    /** Override the value attribute of the input with a custom one */
    value?: string;
}