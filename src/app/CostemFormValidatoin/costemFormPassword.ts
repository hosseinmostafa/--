import { FormGroup, ValidationErrors } from '@angular/forms';

export function ConfirmPasswordValidator(
    control: FormGroup
): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    // // Check if both controls exist and their values match
    // return password && confirmPassword && password.value !== confirmPassword.value
    //   ? { c: true }
    //   : null;

    if (password?.pristine || confirmPassword?.pristine) {
        return null;
    }

    return password && confirmPassword && password.value !== confirmPassword.value ? { misMatch: true } : null;
}
