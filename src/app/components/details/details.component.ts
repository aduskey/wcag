import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  itemId: number;
  selectedItem: Item;

  constructor(private route: ActivatedRoute, private itemStore: ItemService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
