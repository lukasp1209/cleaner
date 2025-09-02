import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FormsModule, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})
export class GalleryComponent {
  sliderValue = 50;
}
