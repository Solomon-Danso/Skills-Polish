import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  AppName = "Hydot School System";

  Success(value: string) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: value,
    });
  }

  Attention(value: string) {
    Swal.fire({
      icon: 'info',
      title: 'Attention',
      text: value,
    });
  }

  showLoading(value: string) {
    Swal.fire({
      title: 'Please wait..',
      backdrop: true,
      allowOutsideClick: false,
      text: value,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  hideLoading() {
    Swal.close();
  }

  Confirm(message: string, onConfirm: () => void) {
    Swal.fire({
      title: 'Are you sure?',
      text: `${message}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm(); // Execute the callback if confirmed
      } else {
        window.location.reload(); // Reload the page otherwise
      }
    });
  }
}
