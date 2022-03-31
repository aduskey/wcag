import { Item } from './item.model';

export interface StoreState {
  items: Item[];
  itemId: number;
  selectedItem: Item;
}
