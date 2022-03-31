import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  itemId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      if (params.get('itemId')) {
        this.itemId = +params.get('itemId');
        console.log(this.itemId);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
