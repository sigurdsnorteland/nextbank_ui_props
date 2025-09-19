export interface IconProps_v1 {
    /** The path to the svg-file og base64 string */
    fileUrl: string;
    /** Size of the icon, default is the closest defined font-size */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Aria label text. If null/undefined, aria-hidden is automatically set to true */
    ariaLabel?: React.ComponentProps<'span'>['aria-label'];
    color?: string;
}