import { Component, OnInit } from '@angular/core';

import { TodoStore } from '../../stores/todo.store';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  itemForm = new FormControl('');

  constructor(public store: TodoStore) { }

  ngOnInit() {
    this.store.fetch();
  }

  addItem() {
    this.store.add(this.itemForm.value);
    this.itemForm.reset();
  }
}
