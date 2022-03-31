import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss'],
})
export class IconNavComponent implements OnInit {
  icons = [
    {
      icon: 'search',
      label: 'Search',
      routerLink: '/visual-search',
    },
    {
      icon: 'list_alt',
      label: 'Search',
      routerLink: '/subnav',
    },
    {
      icon: 'settings',
      label: 'Case Settings',
      routerLink: '/case-settings',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
