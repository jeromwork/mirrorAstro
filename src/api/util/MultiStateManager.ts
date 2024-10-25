import { ref, reactive, computed, toRef } from 'vue';
import DefaultState from './DefaultState';

export default class MultiStateManager extends DefaultState {
  protected _stateName = 'default';
  _requestData = {};

  constructor(name = 'default') {
    super();
    this._stateName = name;
    this._state[name] = reactive({ count: 0, itemsIds: [], items: [] });
    this._state._cash = reactive({});
  }
  // mutations

  public setCount(count:number) {
    this._state[this._stateName].count = count;
    return this;
  }

  public count():Ref<number|null> {
    return computed(() => (this._state[this._stateName]?.count) ?? null);
  }

  public setItems(items:any, afterload:boolean = false):this {
    this.setCacheItems(items)
      .setItemsIds(items, afterload);

    // this._state[this._stateName].items = items;

    if (items.length === 0) {
      this._state[this._stateName].itemsIds = {};
      return this;
    }
    return this;
  }

  public set(name: string, value: any): this {
    this._state[this._stateName][name] = value;
    return this;
  }

  // getters

  public getItems():Ref<any[]|null> {
    return computed(() => {
      // console.log(JSON.parse(JSON.stringify({...this._state[this._stateName]})))
      if (!this._state[this._stateName]?.itemsIds) { return null; }
      const foundItems = [];
      for (const i in this._state[this._stateName].itemsIds) {
        const itemId = this._state[this._stateName].itemsIds[i];
        if (this._state?._cash?.[itemId]) { foundItems.push(this._state._cash[itemId]); }
      }
      return foundItems;
    });
  }

  public get itemsAll():Ref<any[]|null> {
    return computed(() => Object.values(this._state._cash));
  }

  public get(key: string) {
    return computed(() => this._state[this._stateName][key]).value;
  }

  public getItem(val: string, field:string = 'id') {
    return computed(() => {
      if (field === 'id') {
        return (this._state?._cash?.[val]) ? this._state._cash[val] : null;
      } else {
        return this._state._cash.find((item:any) => item[field] === val);
      }
    }).value;
  }

  setCacheItems(items:any[]):this {
    const _cashItems = (this._state?._cash) ? this._state?._cash : {};
    for (const i in items) {
      const item = items[i];
      _cashItems[item.id] = (_cashItems[item.id]) ? Object.assign(_cashItems[item.id], item) : item;
    }
    this._state._cash = _cashItems;
    return this;
  }

  protected setItemsIds(items:any[], afterload:boolean = false):this {
    const itemsIds = (afterload) ? this._state[this._stateName].itemsIds : [];
    for (const i in items) {
      const item = items[i];
      if (!item.id) { throw new Error('not exists item id'); }
      if (itemsIds.includes(item.id)) { continue; }
      itemsIds.push(item.id);
    }
    this._state[this._stateName].itemsIds = itemsIds;
    return this;
  }
}

// export const GlobalMultiStateManager = new MultiStateManager();
