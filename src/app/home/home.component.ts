import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cardImages: any;
  constructor(private serviceData: AuthService) {}

  ngOnInit(): void {
    this.serviceData.getImageData().subscribe(
      (data) => {
        this.cardImages = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
