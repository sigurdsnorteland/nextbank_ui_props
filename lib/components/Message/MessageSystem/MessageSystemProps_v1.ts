import { MessageType, Locale } from '../props/Props_v1';
export interface MessageSystemProps_v1 {
    /** info, success, tips, warning or error */
    type: MessageType;
    /** url to svg icon to override default*/
    iconFileUrl?: string;
    /** nn, nb or en */
    locale?: Locale;
    /** Called when closed */
    onClose?: () => void;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}