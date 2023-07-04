import { Action, createReducer, on } from "@ngrx/store";
import {
  changeName,
  customIncrement,
  decrement,
  increment,
  reset,
} from "./counter.actions";
import { counterState, initialState } from "./counter.state";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state) => {
    return { ...state, counter: 0 };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeName, (state) => {
    return {
      ...state,
      name: "SVL",
    };
  })
);

export function counterReducer(state: counterState, action: Action) {
  return _counterReducer(state, action);
}
