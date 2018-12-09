import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    const todos = [
      { id: 1, name: 'Apple', completedAt: '2018-04-01' },
      { id: 2, name: 'Orange', isFavarite: true },
      { id: 3, name: 'Peach', memo: 'sample memo text' },
    ];
    return {todos};
  }
}
