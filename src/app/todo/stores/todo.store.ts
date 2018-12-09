import { Injectable } from '@angular/core';
import {action, computed, observable, reaction, runInAction, set} from 'mobx';

import { TodoHttpService } from '../todo-http.service';

@Injectable({
  providedIn: 'root'
})
export class TodoStore {
  @observable
  todos: any[];

  constructor(private http: TodoHttpService) {
    this.reset();
    reaction(() => this.todos.length, () => console.log('changed!'));
  }

  @computed
  get isEmpty(): boolean {
    return this.todos.length === 0;
  }

  @action('reset')
  reset() {
    set(this, {
      todos: []
    });
  }

  @action('fetch')
  async fetch() {
    const result = await this.http.fetchTodos();
    runInAction(() => this.todos = result);
  }

  @action('add')
  add(name: string) {
    this.todos.push({name});
  }
}
