import React from "react";
import { CurrentType, ID } from "./App";

type Subscription<State> = (state: State) => void;

class BloC<State> {
  private listeners: Set<Subscription<State>> = new Set([]);

  constructor(public state: State) {}

  subscribe(listener: Subscription<State>) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: Subscription<State>) {
    this.listeners.delete(listener);
  }

  protected notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }
}

export class TodoStorage extends BloC<any> {
  constructor(public state: any) {
    super(state);
  }
  clearState = () => {
    return {
      id: 0,
      text: "",
      markVariableTodo: false,
    };
  };

  getState = () => {
    return this.state;
  };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.state = {
      ...this.state,
      currentItem: {
        text: e.target.value,
        id: Date.now(),
        markVariableTodo: false,
      },
    };
    this.notify();
  };

  addTodo = (): void => {
    if (!this.state.currentItem.text) return;
    this.state = {
      items: [...this.state.items, { ...this.state.currentItem }],
      currentItem: this.clearState(),
    };

    this.notify();
  };

  deleteTodo = (id: ID): void => {
    this.state.items = this.state.items.filter(
      (item: CurrentType) => item.id !== id
    );
    this.notify();
  };

  textUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: ID): void => {
    this.state.items.forEach((item: CurrentType) => {
      if (item.id === id) {
        item.text = e.target.value;
      }
    });
    this.notify();
  };

  checkedBool = (id: ID): void => {
    this.state.items.forEach((item: CurrentType) => {
      if (item.id === id) {
        item.markVariableTodo
          ? (item.markVariableTodo = false)
          : (item.markVariableTodo = true);
      }
    });

    this.notify();
  };

  deleteMarkTodo = (): void => {
    this.state.items = this.state.items.filter(
      (item: CurrentType) => !item.markVariableTodo
    );
    this.notify();
  };

  allMarkTodo = (): void => {
    this.state.items.forEach((item: CurrentType) => {
      item.markVariableTodo = true;
    });
    this.notify();
  };
}

export const todoStorage = new TodoStorage({
  items: [],
  currentItem: {
    id: 0,
    text: "",
    markVariableTodo: false,
  },
});
