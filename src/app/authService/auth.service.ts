import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private router: Router, private httpService: HttpClient) {}

  login(userName) {
    sessionStorage.setItem('isLoggedIn', userName);
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  getData() {
    return this.httpService.get('../../assets/login/logindata.json');
  }

  getImageData() {
    return this.httpService.get('../../assets/images_data/imagedata.json');
  }
}
