import React from 'react';
export type Thumb = 'THUMB_UP' | 'THUMB_DOWN';
interface FeedbackThumbsProps_v1 {
    locale: 'nb' | 'nn' | 'en';
    onClick: (thumb: Thumb) => void;
    headingId: string;
}
export declare const FeedbackThumbs: React.FC<FeedbackThumbsProps_v1>;
export {};
