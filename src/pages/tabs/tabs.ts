import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MercadoPage } from '../mercado/mercado';
import { NovidadesPage } from '../novidades/novidades';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
   tab4Root = MercadoPage;
  tab5Root = NovidadesPage;

  constructor() {

  }
}
