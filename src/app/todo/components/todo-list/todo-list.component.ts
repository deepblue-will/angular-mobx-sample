import { Component, OnInit } from '@angular/core';

import { TodoStore } from '../../stores/todo.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private store: TodoStore) { }

  async ngOnInit() {
    await this.store.fetch();
  }
}
