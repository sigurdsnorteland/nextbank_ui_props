export interface DatepickerCompProps_v1 {
    'aria-invalid'?: React.ComponentProps<'input'>['aria-invalid'];
    ariaInvalid?: React.ComponentProps<'input'>['aria-invalid'];
    'aria-describedby'?: React.ComponentProps<'input'>['aria-describedby'];
    ariaDescribedby?: React.ComponentProps<'input'>['aria-describedby'];
    /** Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene. */
    onBlur?: (evt: React.FocusEvent<HTMLElement>) => void;
    calendarAbove?: boolean;
    id?: string;
    /**
     * Seneste tillatte dato. Format: 'dd.mm.yyyy'
     *
     * Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
     * maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
     * tillater et bredere intervall.
     */
    maxDate?: string | null;
    /**
     * Tidligste tillatte dato. Format: 'dd.mm.yyyy'
     *
     * Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
     * maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
     * tillater et bredere intervall.
     */
    minDate?: string | null;
    onChange: (date: string) => void;
    fullWidth?: boolean;
    fieldMessage?: string | null;
    /** Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet */
    labelId: string;
    /** Om måned- og år-dropdown skal vises i kalenderen */
    dropdownCaption?: boolean;
}