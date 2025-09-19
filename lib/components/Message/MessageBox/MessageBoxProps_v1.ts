import { MessageHeaderProps_v1 } from '../MessageHeader/MessageHeaderProps_v1';
import { Locale, MessageType } from '../props/Props_v1';
export interface MessageBoxProps_v1 {
    /** url to svg icon to override default*/
    iconFileUrl?: string;
    /** The header */
    header?: React.ReactElement<MessageHeaderProps_v1> | string;
    /** info, success, tips, warning or error */
    type: MessageType;
    /** Decides the language of the aria-label for the close icon */
    locale?: Locale;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}