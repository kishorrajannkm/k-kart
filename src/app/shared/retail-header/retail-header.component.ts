import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/components/core/login.service';

@Component({
  selector: 'app-retail-header',
  templateUrl: './retail-header.component.html',
  styleUrls: ['./retail-header.component.scss']
})
export class RetailHeaderComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;
  countryList: any;

  constructor(
    private router: Router,
    public translate: TranslateService,
    public loginService: LoginService
    ) {
    this.navLinks = [
      {
          label: 'NAV_LINK.HOME',
          link: './home',
          index: 0
      },
      {
          label: 'NAV_LINK.LOGIN',
          link: './login',
          index: 1
      },
      {
          label: 'NAV_LINK.ITEMS',
          link: './items',
          index: 2
      },
      {
          label: 'NAV_LINK.WISHLIST',
          link: './wishlist',
          index: 3
      },
      {
        label: 'NAV_LINK.CART',
        link: './cart',
        index: 4
      },
      {
        label: 'NAV_LINK.MY_PROFILE',
        link: './profile',
        index: 5
      },
      {
        label: 'NAV_LINK.USER',
        link: './user',
        index: 6
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  public logout(): void {
    this.loginService.userLoggedInData = {
      username: '',
      loggedIn: false
    };
    this.router.navigate(['home']);
  }

}
