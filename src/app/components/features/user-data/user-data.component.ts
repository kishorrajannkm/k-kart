import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

  public incrementAge(): void {
    this.user.age = this.user.age + 1;
  }

}
