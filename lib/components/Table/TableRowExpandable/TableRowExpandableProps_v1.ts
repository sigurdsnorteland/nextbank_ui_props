export interface TableRowExpandableProps_v1 extends Omit<React.ComponentPropsWithoutRef<'tr'>, 'onClick'> {
    expandContent: React.ReactNode;
    locale?: 'nb' | 'nn' | 'en';
    isDefaultOpen?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}