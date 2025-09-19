import { Thumb } from './props/FeedbackThumbsProps_v1';
import { FeedbackExpandedProps_v1 } from './props/FeedbackExpandedProps_v1';
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type Locale = 'nb' | 'nn' | 'en';
type BgColor = 'primary' | 'secondary' | 'tertiary';
export interface FeedbackProps_v1 {
    headingLevel?: HeadingLevel;
    locale?: Locale;
    onThumbClick: (thumb: Thumb) => void;
    onFeedbackSend: (feedbackText: string, consent?: boolean) => void;
    bgColor?: BgColor;
    contactLink?: FeedbackExpandedProps_v1['contactLink'];
    texts?: {
        feedbackNotSentHeading?: string;
        consentText?: string;
    };
    className?: string;
    includeConsent?: boolean;
}