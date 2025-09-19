import { DatepickerCompProps_v1 } from "./props/DatepickerCompProps_v1";
import { Locale } from "./props/Props_v1";

export interface DatepickerProps_v1 extends DatepickerCompProps_v1 {
    value: string;
    locale: Locale;
}