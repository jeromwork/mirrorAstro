import { computed, reactive } from 'vue';
import { renderTemplate } from 'rollup-plugin-visualizer/dist/plugin/render-template';

export default class DefaultState {
  protected _state: { [key: string]: any } = reactive({});
  public set(name: string, value: any): this {
    this._state[name] = value;
    return this;
  }

  public get(key: string) {
    return computed(() => this._state[key]).value;
  }

  public get itemsAll():Ref<any[]|null> {
    return this._state.items;
  }

  public setItems(items:any, afterload:boolean = true):this {
    this._state.items = (items.length === 0) ? items : {};
    return this;
  }

  public getItems():Ref<any[]|null> {
    return computed(() => (this._state?.items) ?? null);
  }

  public getItem(val: any, field:string = 'id'): any|null {
    return computed(() => {
      if (!this._state?.items) { return null; }
      return (this._state.items.find((item:any) => item[field] === val)) ?? null;
    }).value;
  }

  public count():Ref<number|null> {
    return computed(() => this._state.count);
  }

  public setCount(count:number):this {
    this._state.count = count;
    return this;
  }
}
