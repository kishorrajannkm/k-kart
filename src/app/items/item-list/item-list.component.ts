import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public items: Array<any> = [];
  public searchMobileText: any;

  constructor(
    private itemService: ItemsService,
    private router: Router) {}

  ngOnInit(): void {
    // this.items = this.itemService.getItems();
    this.itemService.fetchItems().subscribe((itemList: any) => {
      this.items = itemList;
    });
  }

  showItemDetails(item: any) {
    this.itemService.item = item;
    this.router.navigate(['items', 'item-details', item._id]);
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
