import { ChangeEvent } from 'react';
export interface DropdownProps_v1 {
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    inline?: boolean
}