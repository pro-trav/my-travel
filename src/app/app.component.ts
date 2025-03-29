import { Component } from '@angular/core';
import {
  ExternalLink,
  InternalRoute,
  BannerLinks,
  HeaderUser,
} from '@uiowa/uiowa-header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  externalLinks = [
    new ExternalLink(
      'Employee Self Service',
      'https://hris.uiowa.edu/portal18'
    ),
  ];
  applicationName = 'ProTrav';
  internalRoutes = [
    new InternalRoute('Home', ''),
    new InternalRoute('New', 'new'),
    new InternalRoute('My Trips', 'trips'),
    new InternalRoute('My Favorites', 'favorites'),
    new InternalRoute('Cash Advance', 'cash-advance'),
    new InternalRoute('Admin', 'admin'),
  ];
  headerUser: HeaderUser = {
    userName: 'abc',
    originalUserName: 'changhxu',
  } as HeaderUser;
  constructor() {}

  ngOnInit() {}

  stopImpersonation() {
    this.headerUser = {
      userName: 'changhxu',
      originalUserName: '',
    };
    console.log(`impersonation stopped`);
  }
}
