import React, { AriaAttributes } from "react";
import { AccountSelectorAccountProps_v1, Locale } from "../AccountSelectorAccount/AccountSelectorAccountProps_v1";
export interface AccountSelectorProps_v1<T extends AccountSelectorAccountProps_v1 = AccountSelectorAccountProps_v1> {
    /**
     * Array of objects:
     *  {
     *      accountNumber: string.isRequired,
     *      name: string.isRequired,
     *      balance: number,
     *      currencyCode: string,
     *  }
     */
    accounts: T[];
    className?: string;
    /** Id blir satt automatisk hvis AccountSelector brukes i en InputGroup. Brukes for å koble label og input */
    id: string;
    locale?: Locale;
    /** Overrides default string for all locales. */
    noMatches?: {
        text: string;
        dropdownList?: T[];
    };
    /** Props passed to the input field */
    inputProps?: React.ComponentPropsWithoutRef<"input">;
    /** Returns the selected account object */
    onAccountSelected: (account: T) => void;
    /** Determines if account details should be shown (balance and account number under the input field) */
    hideAccountDetails?: boolean;
    /** Default false. */
    showBalance?: boolean;
    /** Default true. */
    formatAccountNumber?: boolean;
    /** id of element that labels input field */
    labelledById?: string;
    /** Attribute used in the input when an item is selected. **/
    displayAttribute?: keyof T;
    /**
     * Allows selecting the text the user writes even if it does not match anything in the accounts array.
     * Useful e.g. if you want to pay to account that is not in yur recipients list.
     */
    allowCustomAccount?: boolean;
    /** Custom element to use for each item in the dropdown list */
    optionBody?: React.ComponentType<{
        item: T;
        locale: Locale;
        isHighlighted: boolean;
        dropdownAttributes: (keyof T)[];
    }>;
    /** Element to be shown below dropDownList */
    postListElement?: React.ReactNode;
    /** Sets aria-invalid on input field  */
    "aria-invalid"?: AriaAttributes["aria-invalid"];
    ariaInvalid?: AriaAttributes["aria-invalid"];
    /** Prop passed to the dropdown list */
    onOpen?: () => void;
    onClose?: () => void;
    selectedAccount?: T;
    /**
     * Called when emptying the input field and moving focus away from the account selector
     * */
    onReset: () => void;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}