import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

  constructor(private http: HttpClient) { }

  fetchTodos(): Promise<any[]> {
    return this.http.get<any[]>('api/todos').toPromise();
  }
}
