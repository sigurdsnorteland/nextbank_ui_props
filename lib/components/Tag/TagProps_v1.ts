export interface TagProps_v1 {
    /** Bestemmer taggens uttrykk, om den skal være fremhevet eller subtil */
    type?: 'emphasis' | 'subtle';
    className?: string;
    /** Fargen på taggen. Info, suksess, advarsel, kritisk, nøytral eller tips */
    variant?: 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'tip';
    /** Størrelsen på taggen, standard er md */
    size?: 'sm' | 'md' | 'lg';
}