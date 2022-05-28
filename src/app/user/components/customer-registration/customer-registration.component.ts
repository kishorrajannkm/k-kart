import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidatorService } from 'src/app/shared/validator.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public validatorService: ValidatorService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required], this.validatorService.userNameValidator.bind(this.validatorService)],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]]
    }, {
      validators: [this.validatorService.passwordMatch('password', 'confirmPassword')]
    });
  }

  ngOnInit() {
  }

  get registerFormControl() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.userService.registerCustomer(this.registrationForm.value).subscribe((res: any) => {
      this.snackBar.open(res.message, 'Close', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      this.registrationForm.reset()
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.controls[key].setErrors(null)
      });
    });
  }

}
