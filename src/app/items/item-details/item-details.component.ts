import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public item: any;
  constructor(
    private itemService: ItemsService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.item = this.itemService.item;
    this.itemService.isWishlistedItem(this.item).subscribe((res: any) => {
      this.item.isAddedToWishlist = res.isAddedToWishlist;
      this.item.widhListId = res.widhListId;
    });
  }

  addOrRemoveWishListItems(item: any) {
    if (item.isAddedToWishlist) {
      this.removeFromWishList();
    } else {
      this.addToWishList();
    }
  }

  addToWishList() {
    this.itemService.addToWishListItems(this.item).subscribe((res: any) => {
      this.item.isAddedToWishlist = !this.item.isAddedToWishlist;
      this.item.widhListId = res.docs._id;
      this.snackBar.open(res.message, 'Close', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    });
  }

  removeFromWishList() {
    console.log(this.item);
    this.itemService.removeFromWishList(this.item).subscribe((res: any) => {
      this.item.isAddedToWishlist = !this.item.isAddedToWishlist;
      this.snackBar.open(res.message, 'Close', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    });
  }

}
