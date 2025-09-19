export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type Margin = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
export type Padding = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
export type Gap = 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg';
export type BackgroundColor = 'primary' | 'secondary' | 'tertiary';
type ColumnsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
interface GridColSize {
    cols: ColumnsRange;
    offset?: ColumnsRange;
}
export type SizeModifier = ColumnsRange | GridColSize;
export {};