import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  cardImages: any;

  constructor(private userService: AuthService) {}

  ngOnInit(): void {
    this.userService.getImageData().subscribe(
      (data) => {
        this.cardImages = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
