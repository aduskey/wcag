import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../../models/item.model';
import { StoreState } from '../../models/storeState.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss'],
})
export class DetailsHeaderComponent implements OnInit {
  sub: Subscription;
  itemId: number;
  item: Item;

  constructor(private itemStore: ItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      if (params.get('itemId')) {
        this.itemId = +params.get('itemId');
        if (this.itemId) {
          this.itemStore.getItemDetails(this.itemId);
        }
      }
    });
    this.sub.add(
      this.itemStore.stateChanged.subscribe((state: StoreState) => {
        if (state && state.selectedItem) {
          this.item = state.selectedItem;
        }
      })
    );
  }
}
