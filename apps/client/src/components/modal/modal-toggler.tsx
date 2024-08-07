import ModalsUtils from "../../utils/modal";

export type ModalTogglerProps = {
    children: React.ReactNode;
    modalId: string;
    attributes?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}
export default function ModalToggler(props: ModalTogglerProps) {
    const { children, modalId, attributes } = props;

    function onClickHandler() {
        ModalsUtils.OpenModal(modalId);
    }
    if (attributes) {
        const { onClick } = attributes;
        return (
            <button {...attributes} onClick={ onClick  || onClickHandler}>
                { children }
            </button>
        );
    }
    return (
        <button className="btn btn-primary border-none" onClick={onClickHandler}>
            { children }
        </button>
    );
}