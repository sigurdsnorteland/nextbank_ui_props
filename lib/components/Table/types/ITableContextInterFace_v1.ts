import React from 'react';
import { SortOrder, InitialSort } from './ITypes_v1';
export interface TableContextInterFace {
    activeSortOrder?: SortOrder;
    activeSortKey?: string;
    updateSort: (sortKey: string) => void;
    getSort: (sortKey: string) => SortOrder;
}
export declare const TableContext: React.Context<TableContextInterFace>;
interface Props {
    initialSort?: InitialSort;
    children: React.ReactNode;
}
export declare const TableProvider: React.FC<Props>;
export {};
