export type ToastSuccessAlertProps = {
    message: string;
}
export default function ToastSuccessAlert({ message }: ToastSuccessAlertProps) {

    return (
        <div className="toast toast-top p-0 toast-center z-40">
            <div className="alert alert-success">
                <span>{message}</span>
            </div>
        </div>
    );
}