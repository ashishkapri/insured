import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../authService/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogIn: boolean = false;
  userName: string;
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn();
  }

  openLogin() {
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  isUserLoggedIn() {
    let userName = sessionStorage.getItem('isLoggedIn');
    if (userName) {
      this.userName = userName;
      this.isLogIn = true;
      this.openSnackBar(userName, null);
    } else {
      this.isLogIn = false;
    }
  }

  logout() {
    this.authService.logout();
  }

  openSnackBar(message, action: string) {
    this._snackBar.open('Welcome ' + message, action, {
      verticalPosition: 'top',
    });
  }
}
