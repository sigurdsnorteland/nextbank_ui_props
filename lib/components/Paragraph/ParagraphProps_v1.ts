export interface ParagraphProps_v1 {
    /** Makes this paragraph a lead paragraph, typically used directly below a heading. */
    lead?: boolean;
    /** Makes this paragraph a sub-lead paragraph, typically used directly below a lead paragraph. */
    subLead?: boolean;
    /** Use if text alignment should override that of its container. */
    textCenter?: boolean;
    /** Use if text alignment should override that of its container. */
    textLeft?: boolean;
    /** Use if the paragraph should have no margin. */
    noMargin?: boolean;
}