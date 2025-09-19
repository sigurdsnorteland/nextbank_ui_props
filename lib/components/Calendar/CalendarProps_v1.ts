export interface CalendarProps_v1 {
    calendarClassName?: string;
    escKeyHandler?: React.KeyboardEventHandler<HTMLDivElement>;
    locale: "nb" | "nn" | "en";
    onDatePicked: (date: string) => void;
    selectedDate?: string | null;
    focusOnMount?: boolean;
    /** Om måned- og år-dropdown skal vises i kalenderen */
    dropdownCaption?: boolean;
    /** Tidligste tillatte dato (format: "dd.mm.yyyy") - brukes kun til å bestemme år-intervall i dropdown */
    minDate?: string | null;
    /** Seneste tillatte dato (format: "dd.mm.yyyy") - brukes kun til å bestemme år-intervall i dropdown */
    maxDate?: string | null;
}