import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    const todos = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
    ];
    return {todos};
  }
}
