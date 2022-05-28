import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { LoginService } from '../../core/login.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public items: Array<any> = [];

  constructor(
    private itemService: ItemsService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    // this.items = this.itemService.getWishList();
    this.itemService.fetchCustomerWishlistItems(this.loginService.userLoggedInData).subscribe((res) => {
      this.items = res;
    });
  }

  showItemDetails(itemId: number) {
    this.router.navigate(['items', 'item-details']);
  }

  addOrRemoveItemToWishlist(item: any) {
    item.isAddedToWishlist = !item.isAddedToWishlist;
    this.itemService.addOrRemoveFromWishlist(item).subscribe((response) => {
      console.log(response);
    });
    // this.items.forEach((item) => {
    //   if (item.itemId === itemId) {
    //     item.isAddedToWishlist = !item.isAddedToWishlist;
    //     this.itemService.setItems(itemId, item.isAddedToWishlist);
    //   }
    // });
  }

}
