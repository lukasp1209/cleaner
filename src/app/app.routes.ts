import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { GalleryComponent } from './pages/gallery/gallery';
import { ContactComponent } from './pages/contact/contact';
import { ImpressumComponent } from './pages/impressum/impressum';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz';

export const routes: Routes = [
  { path: '', component: Home, title: 'Startseite - Reinigungsfirma' },
  { path: 'services', component: Services, title: 'Leistungen - Reinigungsfirma' },
  { path: 'gallery', component: GalleryComponent, title: 'Galerie - Reinigungsfirma' },
  { path: 'contact', component: ContactComponent, title: 'Kontakt - Reinigungsfirma' },
  { path: 'impressum', component: ImpressumComponent, title: 'Impressum - Reinigungsfirma' },
  { path: 'datenschutz', component: DatenschutzComponent, title: 'Datenschutz - Reinigungsfirma' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
