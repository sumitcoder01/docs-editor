
export type DeleteDocumentButtonProps = {
    id: string;
}

export const DeleteDocumentButton = ({ id }: DeleteDocumentButtonProps) => {

    const handleDeleteDocument = () => {
        console.log(id);
    }
    return (
        <button onClick={handleDeleteDocument}>delete</button>
    )
}