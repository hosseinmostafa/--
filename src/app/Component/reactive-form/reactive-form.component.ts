import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../../CostemFormValidatoin/costemFormUserName';
import { ConfirmPasswordValidator } from '../../CostemFormValidatoin/costemFormPassword';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  regsetForm : FormGroup
  constructor(private fb: FormBuilder) {
    this.regsetForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator ]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      location: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, { validators: [ConfirmPasswordValidator] })
  }

  gitData() {
    // لان مش لازم اكتبلو الباصورد ودي عشان اعمل سكيورتي للموقع بتاعي setValue الي بدل  patchValue هيا دي
    this.regsetForm.patchValue({
      userName: 'Ahmed',
      location: {
        city: 'Egypt',
        state: 'Hurghada',
        postalCode: '123456'
      }
    })
  }
}
