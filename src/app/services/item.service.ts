import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { ApiService } from '../api/api.service';
import { StoreState } from '../models/storeState.model';

const initState: StoreState = {
  items: [],
  itemId: null,
  selectedItem: null,
};

const enum StoreActions {
  INIT_STATE = 'INIT_STATE',
  ITEM_UPDATED = 'ITEM_UPDATED',
}

@Injectable({
  providedIn: 'root',
})
export class ItemService extends ObservableStore<StoreState> {
  constructor(private api: ApiService) {
    super({
      stateSliceSelector: (state: StoreState) => {
        if (!state) return initState;
        return {
          items: state.items,
          itemId: state.itemId,
          selectedItem: state.selectedItem,
        };
      },
      trackStateHistory: true,
    });
    this.setState(initState, StoreActions.INIT_STATE);
  }

  getItems() {
    this.api.getItems().subscribe((response: any) => {
      const st = this.getState();
      st.items = response;
      st.selectedItem = st.items[0];
      this.setState(st, StoreActions.ITEM_UPDATED);
    });
  }

  getItemDetails(id: number) {
    const st = this.getState();
    st.selectedItem = st.items.find((item) => item.id === id);
    this.setState(st, StoreActions.ITEM_UPDATED);
  }
}
