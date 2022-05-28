import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { LoginService } from '../components/core/login.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public item: any;
  public items: Array<any> = [
    {
      itemId: 324,
      cost: 13500,
      name: 'Samsung Galaxy On8',
      countLeft: 3,
      deliveryInDays: 5,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 123,
      cost: 27000,
      name: 'Vivo V15 Pro',
      countLeft: 2,
      deliveryInDays: 3,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 432,
      cost: 10000,
      name: 'Samsung Galaxy M01',
      countLeft: 10,
      deliveryInDays: 5,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 564,
      cost: 13500,
      name: 'Samsung Galaxy J5 2016',
      countLeft: 3,
      deliveryInDays: 5,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 678,
      cost: 4000,
      name: 'Nokia 3310',
      countLeft: 0,
      deliveryInDays: 0,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 980,
      cost: 15000,
      name: 'Samsung Galaxy Grand Prime',
      countLeft: 10,
      deliveryInDays: 7,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 870,
      cost: 16000,
      name: 'Samsung Galaxy J7',
      countLeft: 5,
      deliveryInDays: 3,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 238,
      cost: 15000,
      name: 'Samsung Galaxy Y',
      countLeft: 0,
      deliveryInDays: 0,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 236,
      cost: 13000,
      name: 'Vivo Y15 Pro',
      countLeft: 12,
      deliveryInDays: 0,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 230,
      cost: 16000,
      name: 'Samsung Galaxy M32',
      countLeft: 10,
      deliveryInDays: 2,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 911,
      cost: 13500,
      name: 'Samsung Galaxy M12',
      countLeft: 19,
      deliveryInDays: 5,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 912,
      cost: 14000,
      name: 'Samsung Galaxy M21',
      countLeft: 20,
      deliveryInDays: 3,
      images: [],
      isAddedToWishlist: false
    },
    {
      itemId: 913,
      cost: 17000,
      name: 'Samsung Galaxy M31',
      countLeft: 20,
      deliveryInDays: 3,
      images: [],
      isAddedToWishlist: false
    }
  ];

  public users: Array<any> = [];

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.users = [
      {
        name: 'abc',
        age: 25
      },
      {
        name: 'cde',
        age: 30
      },
      {
        name: 'fgh',
        age: 35
      }
    ];
  }

  public getItems() {
    return this.items;
  }

  setItems(itemId: any, isAdded: boolean) {
    this.items.forEach((item) => {
      if (item.itemId === itemId) {
        item.isAddedToWishlist = isAdded;
      }
    });
  }

  getWishList() {
    return this.items.filter((item: any) => {
      return item.isAddedToWishlist === true;
    });
  }

  fetchItems(): Observable<any> {
    return this.http.get('http://localhost:3000/items');
  }

  addOrRemoveFromWishlist(item: any): Observable<any> {
    return this.http.put('http://localhost:3000/items/addToWishlist/'+item._id, item);
  }

  fetchWishlistItems(): Observable<any> {
    return this.http.get('http://localhost:3000/items/wishlist');
  }

  addToWishListItems(item: any): Observable<any> {
    const customerWishlistData = {
      username: this.loginService.userLoggedInData.username,
      wishlistId: item._id
    };
    return this.http.post('http://localhost:3000/customers/addTowishlist', customerWishlistData);
  }

  removeFromWishList(item: any): Observable<any> {
    return this.http.delete('http://localhost:3000/customers/wishlist/'+item.widhListId);
  }

  isWishlistedItem(item: any): Observable<any> {
    const customerWishlistData = {
      username: this.loginService.userLoggedInData.username,
      wishlistId: item._id
    };
    return this.http.post('http://localhost:3000/customers/iswishlisteditem', customerWishlistData);
  }

  fetchCustomerWishlistItems(userLoggedInData: any): Observable<any> {
    return this.http.post('http://localhost:3000/customers/wishlist', userLoggedInData);
  }
}
