export default class ModalsUtils {



    public static OpenModal(modalId: string) {
        const modal = document.getElementById(modalId);
        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        }
    }
}   