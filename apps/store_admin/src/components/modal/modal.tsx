export type CustomModalProps = {
    dialogId: string;
    children: React.ReactNode;
    attributes?: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;

}
export default function CustomModal(props: CustomModalProps) {
    const { dialogId, children, attributes } = props;

    function onClickHandler() {
        const modal = document.getElementById(dialogId);
        if (modal instanceof HTMLDialogElement) {
            modal.close();
        }
    }

    return (
        <dialog {...attributes} id={dialogId} className="modal">
            <div className="modal-box p-0">
                <button onClick={onClickHandler} className="btn btn-sm btn-circle btn-primary-content absolute right-2 top-2">✕</button>
                { children }
            </div>
        </dialog>
    );
}