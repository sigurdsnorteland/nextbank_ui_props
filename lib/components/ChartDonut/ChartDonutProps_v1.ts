export interface ChartDonutProps_v1 {
    /** Short text labeling left value, like "empty", "said yes" etc */
    firstLabel?: string;
    /** Short text labeling right value, like "full", "said` no" etc */
    lastLabel?: string;
    /** React node to be inserted directly under the chart"s name, alternative to first/last label */
    label?: React.ReactNode;
    /** Short text labeling the graph in total, like "percentage", "voted this year" etc */
    name: string;
    /** The percentage for the right-most value */
    percentage: number;
}