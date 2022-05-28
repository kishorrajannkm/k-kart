import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { LoginService } from './components/core/login.service';
import { countryList } from './shared/country-list.const';
// import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-material-tab-router';  
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

  public users: Array<any> = [];
  public searchCountryText: any;

  ngOnInit(): void {

    this.translate.addLangs(['english', 'french', 'tamil']);
    this.translate.setDefaultLang('english');

    const browserLang = 'english';
    this.translate.use(browserLang.match(/english|french|tamil/) ? browserLang : 'english');

    this.countryList = countryList;

    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  public triggerVal() {
    this.searchCountryText = 'Ind';
  }

  public logout(): void {
    this.loginService.userLoggedInData = {
      username: '',
      loggedIn: false
    };
    this.router.navigate(['home']);
  }
}
