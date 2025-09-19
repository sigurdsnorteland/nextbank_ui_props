export interface FileUloadItemProps_v1<Document> {
    /** Shape of the file type, name is required, error and document.content is optional */
    file: {
        name: string;
        document?: Document;
        error?: string;
    };
    /**
     * Called when the user clicks the delete button for a given file. Is called with the name of the file in question.
     */
    onFileDeleted: React.MouseEventHandler<HTMLButtonElement>;
    /** Label for the cancel button */
    cancelText?: string;
    /** Label for the delete button */
    deleteText?: string;
}