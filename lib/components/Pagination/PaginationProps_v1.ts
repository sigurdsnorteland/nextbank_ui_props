import { Locale } from './props/Props_v1';
import type { PaginationControlsProps_v1 } from './props/Props_v1';
export interface PaginationProps_v1 {
    className?: string;
    locale?: Locale;
    showRowsPerPageText?: boolean;
    paginationControls: PaginationControlsProps_v1;
    rowsPerPageOptions?: number[];
    navigationButtonText?: boolean;
    ariaLabel: string;
    onClickPrev?: () => void;
    onClickNext?: () => void;
    onClickPage?: (page: number) => void;
}