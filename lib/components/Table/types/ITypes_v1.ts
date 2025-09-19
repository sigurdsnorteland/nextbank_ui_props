export declare const ariaSortOrders: readonly ["none", "ascending", "descending"];
export type SortOrder = (typeof ariaSortOrders)[number];
export type InitialSort = {
    sortOrder: SortOrder;
    sortKey: string;
};