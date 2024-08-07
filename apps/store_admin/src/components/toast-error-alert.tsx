
export type ToastErrorAlertProps = {
    message: string;
}
export default function ToastErrorAlert({ message }: ToastErrorAlertProps) {

    return (
        <div className="toast toast-top p-0 toast-center z-40">
            <div className="alert alert-error">
                <span>{message}</span>
            </div>
        </div>
    );
}