import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule} from '@angular/material';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,

    MatButtonModule,
    MatCardModule,
  ],
  declarations: [TodoListComponent],
})
export class TodoModule { }
