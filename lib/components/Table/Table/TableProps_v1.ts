import { TableContextInterFace } from '../types/ITableContextInterFace_v1';
import { InitialSort } from '../types/ITypes_v1';
export interface TableProps_v1 extends Omit<React.ComponentPropsWithoutRef<'table'>, 'children'> {
    initialSort?: InitialSort;
    children: React.ReactNode | (({ activeSortOrder, activeSortKey, }: {
        activeSortOrder?: TableContextInterFace['activeSortOrder'];
        activeSortKey?: TableContextInterFace['activeSortKey'];
    }) => React.ReactNode);
    breakPoint?: 'none' | 'sm' | 'md';
}