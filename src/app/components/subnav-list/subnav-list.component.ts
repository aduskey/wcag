import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../../models/item.model';
import { StoreState } from '../../models/storeState.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-subnav-list',
  templateUrl: './subnav-list.component.html',
  styleUrls: ['./subnav-list.component.scss'],
})
export class SubnavListComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  items: Item[];
  filteredItems: Item[];

  constructor(private itemStore: ItemService) {}
  ngOnInit() {
    this.sub = this.itemStore.stateChanged.subscribe((state: StoreState) => {
      if (state.items) this.items = state.items;
      console.log(this.items);
    });
    this.itemStore.getItems();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
