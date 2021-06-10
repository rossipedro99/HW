import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
      iconRegistry.addSvgIcon(
        'chat',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chat.svg'));      
        iconRegistry.addSvgIcon(
          'info',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/info.svg'));     
          iconRegistry.addSvgIcon(
            'login',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/login.svg'));     
            iconRegistry.addSvgIcon(
              'search',
              sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));  
              iconRegistry.addSvgIcon(
                'cart',
                sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cart.svg'));     
              iconRegistry.addSvgIcon(
                'google',
                sanitizer.bypassSecurityTrustResourceUrl('assets/icons/google.svg'));   
  }
}
