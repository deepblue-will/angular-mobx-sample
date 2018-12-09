import { Injectable } from '@angular/core';
import {action, observable, runInAction, set} from 'mobx';

import { TodoHttpService } from '../todo-http.service';

@Injectable({
  providedIn: 'root'
})
export class TodoStore {
  @observable
  todos: any[];

  constructor(private http: TodoHttpService) {}

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
}
