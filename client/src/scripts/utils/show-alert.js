import Swal from 'sweetalert2'


const ToastSuccess = Swal.mixin({
    toast: true,
    position: 'top-end',
    iconColor: 'green',
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
})

const ToastError = Swal.mixin({
    toast: true,
    position: 'top-end',
    iconColor: 'red',
    timer: 3000,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
    showConfirmButton: false,
    timerProgressBar: true,
})

const alertError = (message) =>{
    return ToastError.fire({
        icon: 'error',
        title: message
    })
}
const alertSuccess = (message) =>{
    return ToastSuccess.fire({
        icon: 'success',
        title: message
    })
}

export {alertError, alertSuccess}