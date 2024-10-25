import { toRef, computed, ref, reactive } from 'vue';

import DefaultState from './DefaultState';

export default class StateManager extends DefaultState {
  protected _state: { [key: string]: { count: number; itemsIds: {}; items: any[] } } = {};
}
