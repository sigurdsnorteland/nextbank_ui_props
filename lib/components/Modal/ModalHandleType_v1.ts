export type ModalHandleType_v1 = {
    readonly open: () => void;
    readonly close: () => void;
    readonly isOpen: boolean;
    readonly dialogRef: React.RefObject<HTMLDialogElement>;
};