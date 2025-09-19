export type Locale = "nb" | "nn" | "en";
type AutoComplete<T extends string> = T | (string & {});
export interface AccountSelectorAccountProps_v1 {
    accountNumber: string;
    name: string;
    currencyCode?: AutoComplete<"NOK" | "EUR">;
    balance?: number | string;
}
export {};