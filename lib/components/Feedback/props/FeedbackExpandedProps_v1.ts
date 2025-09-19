import React from 'react';
export interface FeedbackExpandedProps_v1 {
    locale: 'nb' | 'nn' | 'en';
    handleFeedback: (feedbackText?: string, consentGiven?: boolean) => void;
    contactLink?: {
        url: string;
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        linkText?: string;
    };
    includeConsent?: boolean;
}
export declare const FeedbackExpanded: React.FC<FeedbackExpandedProps_v1>;
