import React, { AriaAttributes } from 'react';
import { Locale, SearchMatcher } from './SearchableDropdownLocalTypes_v1.ts.js';
export interface SearchableDropdownType_v1<Item extends Record<string, any>> {
    /** Id of drop down */
    id: string;
    /** Id of element that labels input field */
    labelledById?: string;
    /** Extra class */
    className?: string;
    /** List of objects to be displayed in dropdown */
    dropdownList: Item[];
    /** The selected item to be displayed in the input field. If not specified, uses internal state to decide. */
    selectedItem?: Item;
    /** Array of attributes to be displayed in list */
    dropdownAttributes: (keyof Item)[];
    /** Array of attributes used when filtering search */
    searchAttributes: (keyof Item)[];
    /** Attribute used in the input when an item is selected. Defaults to first in searchAttributes **/
    displayAttribute?: keyof Item;
    /** Props used on input field */
    inputProps?: React.ComponentProps<'input'>;
    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements?: number;
    /** Called when a value is selected */
    onChange?: (item: Item | null) => void;
    /** Custom element to use for each item in dropDownList */
    optionBody?: React.ComponentType<{
        item: Item;
        isHighlighted: boolean;
        dropdownAttributes: (keyof Item)[];
        locale: Locale;
    }>;
    /** Element to be shown below dropDownList */
    postListElement?: React.ReactNode;
    /** Message and a dropdownList to use when no match */
    noMatch?: {
        text?: string;
        dropdownList?: Item[];
    };
    /** Locale to use for translations */
    locale?: Locale;
    /** aria-invalid attribute  */
    'aria-invalid'?: AriaAttributes['aria-invalid'];
    ariaInvalid?: AriaAttributes['aria-invalid'];
    /** Function used to format the input field value */
    formatter?: (value: string) => string;
    /**
     * Function used to decide if an item matches the input field value
     * (inputValue: string, searchAttributes: string[]) => (item) => boolean
     */
    searchMatcher?: SearchMatcher<Item>;
    /**
     * For situations where the dropdownList prop will be updated at a later point in time.
     * That is, if the consumer first sends down an initial value before sending down data
     * that has loaded.
     */
    isLoading?: boolean;
    /** Function used when dropdown opens */
    onOpen?: () => void;
    /**  Function used when dropdown closes */
    onClose?: () => void;
    /** Custom compare between objects. Default is deep equals*/
    isEqual?: (itemA: Item, itemB: Item) => boolean;
}