import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export interface SortOption {
  title: string;
  isSelected: boolean;
}

@Component({
  selector: 'simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.scss'],
})
export class SimpleSearchComponent implements OnDestroy, AfterViewInit {
  // @Output()
  // searchUpdated: EventEmitter<string> = new EventEmitter();

  // @Output()
  // searchCleared = new EventEmitter();

  // @Output()
  // addNewSelected = new EventEmitter();

  // @Output()
  // sortSelected = new EventEmitter();

  // @Output()
  // overFlowSelected: EventEmitter<string> = new EventEmitter();

  // @Input()
  // title = '';

  // @Input()
  // searchPlaceholder = 'Search';

  // @Input()
  // showOverflow = false;

  // @Input()
  // showAddNew = true;

  // @Input()
  // showSort = true;

  // @Input()
  // overflowOptions = [];

  // @Input()
  // sortOptions: SortOption[] = [];

  // @ViewChild('searchInput')
  // searchInput: ElementRef;

  // @ViewChild('clearButton', { read: ElementRef })
  // clearButton: ElementRef;

  // isSearching = false;
  // isSelected = false;

  private searchSub: Subscription;

  ngAfterViewInit() {
    // this.searchSub = merge(
    //   fromEvent(this.searchInput.nativeElement, 'keyup'),
    //   fromEvent(this.clearButton.nativeElement, 'keyup')
    // )
    //   .pipe(
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     map((e: any) => e.target?.value || ''),
    //     tap((val: string) => {
    //       this.isSearching = val.length ? true : false;
    //     })
    //   )
    //   .subscribe((searchValue) => this.searchUpdated.emit(searchValue));
  }

  // clear() {
  //   this.isSearching = false;
  //   this.searchInput.nativeElement.value = null;
  //   this.searchCleared.emit();
  // }

  // onAddNew() {
  //   this.addNewSelected.emit();
  // }

  // onSortSelect(selectedOption: SortOption) {
  //   this.sortOptions = this.sortOptions.map((sortedOption: SortOption) => {
  //     sortedOption.isSelected = sortedOption.title === selectedOption.title;
  //     return sortedOption;
  //   });
  //   this.sortSelected.emit(selectedOption);
  // }

  // onOverflowSelect(option: string) {
  //   this.overFlowSelected.emit(option);
  // }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }
}
