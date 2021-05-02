import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Accueil',  icon: 'design_app', class: '' },
    { path: '/user-profile', title: 'Profile',  icon:'education_atom', class: '' },
    { path: '/maps', title: 'Produit',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Contact',  icon:'ui-1_bell-53', class: '' },

    { path: '/table-list', title: 'Utilisateur',  icon:'design_bullet-list-67', class: '' },
    { path: '/upgrade', title: 'Se déconnecter',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
