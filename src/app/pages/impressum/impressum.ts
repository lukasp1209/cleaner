import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './impressum.html',
  styleUrl: './impressum.css',
})
export class ImpressumComponent {}
