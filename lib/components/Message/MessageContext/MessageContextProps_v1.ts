import { MessageHeaderProps_v1 } from '../MessageHeader/MessageHeaderProps_v1';
import { MessageType, Locale } from '../props/Props_v1';
export interface MessageContextProps_v1 {
    /** Renders a more compact version of the context message */
    compact?: boolean;
    /** url to svg icon to override default*/
    iconFileUrl?: string;
    /** Decides the language of the aria-label for the close icon */
    locale?: Locale;
    /** info, success, tips, warning or error */
    type: MessageType;
    /** Called when closed */
    onClose?: () => void;
    /** Show close button */
    closeButton?: boolean;
    /** The header */
    header?: React.ReactElement<MessageHeaderProps_v1> | string;
}