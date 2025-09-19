import { FileUloadItemProps_v1 } from "./props/Props_v1";
export interface FileUploadProps_v1 {
    /** ID for the input field. The ID is used as a base for the label ID as well. */
    id: string;
    /** Label for the button to trigger native upload handling. */
    label: string;
    /**
     * A map of files, indexed by file name (check file-shape on FileItem.js propTypes), that the user has uploaded.
     * Must be maintained outside of `FileUpload`. It is up to the implementation to deny or accept file types, sizes, etc,
     * and it is important that duplicates are not allowed.
     * */
    files: Record<string, FileUloadItemProps_v1<Document>['file']>;
    /**
     * Will be called with `FileList`-object containing the `File`-objects the user selected.
     * See MDN for documentation on
     * [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) and
     * [File](https://developer.mozilla.org/en-US/docs/Web/API/File).
     */
    onFilesSelected(fileList: FileList | null): void;
    /** Will be called when objects are dropped over the upload-section. */
    onFilesDropped(fileList: FileList | null): void;
    /**
     * Called when the user clicks the delete button for a given file. Is called with the `File`
     * object of the file in question.
     */
    onFileDeleted(file: FileUloadItemProps_v1<Document>['file']): void;
    /** Whether or not uploading multiple files at once via the native file handler is allowed*/
    multiple?: boolean;
    /** Title module */
    title: string;
    /** Text on the info-section */
    infoText: string;
    /** Subtext on the info-section */
    infoSubText?: string;
    /** Label for the cancel button */
    cancelText?: string;
    /** Label for the delete button */
    deleteText?: string;
    /** Title on the upload-section */
    uploadTitle: string;
    /** MicroText on the upload-section */
    uploadMicroText: string;
    /** SubText on the upload-section */
    uploadSubText: string;
    /** Unique file type specifier that describes a type of file that may be selected by the user, e.g. ".pdf"
     *  See MDN for documentation on
     *  [Unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
     */
    accept?: string;
}