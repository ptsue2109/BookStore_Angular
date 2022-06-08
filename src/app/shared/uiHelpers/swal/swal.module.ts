import Swal from "sweetalert2";
export const swalMessage = (title: string, confirm: string, denyButtonText: string) => {
    return Swal.fire({
        title: title,
        showDenyButton: true,
        confirmButtonText: confirm,
        denyButtonText: denyButtonText,
    })
};
export const swal = (title: string, message: string, status: any) => {
    return Swal.fire(title, message, status)
}