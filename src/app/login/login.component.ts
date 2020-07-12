import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../authService/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public myErrorMessage: string;
  public formSubmitAttempt: boolean;
  loginData: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private loginService: AuthService,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userId: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.myErrorMessage = '';
  }

  isFieldInvalid(feild: string) {
    return (
      (!this.loginForm.get(feild).valid && this.loginForm.get(feild).touched) ||
      (!this.loginForm.get(feild).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const user: any = {
      userId: value.userId,
      userName: value.userName,
      password: value.password,
    };

    this.loginService.getData().subscribe((data) => {
      this.loginData = data;
      var found = false;
      for (var i = 0; i < this.loginData.length; i++) {
        if (
          this.loginData[i].userId == user.userId &&
          this.loginData[i].userName == user.userName &&
          this.loginData[i].password == user.password
        ) {
          let userName = this.loginData[i].userName;
          this.authService.login(userName);
          this.dialog.closeAll();
          break;
        } else {
          this._snackBar.open('Wrong Credentails.', '', {
            verticalPosition: 'top',
          });
        }
      }
    });
  }
}
