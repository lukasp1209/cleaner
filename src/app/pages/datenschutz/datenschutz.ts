import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './datenschutz.html',
  styleUrl: './datenschutz.css',
})
export class DatenschutzComponent {}
