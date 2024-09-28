import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IEmployee } from '../interfaces/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {
  private apiUrl = './data/employees.json';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Internal Server Error');
      })
    );
  }

  getOneEmployee(id: number): Observable<IEmployee | undefined> {
    return this.getAllEmployees().pipe(
      map((employees: IEmployee[]) => {
        const oneEmployee = employees.find((e) => +e.id === id);
        if (!oneEmployee) {
          throw new Error('Employee not found Error message');
        }
        return oneEmployee;
      }),
      catchError((err) => {
        return throwError(() => err.message);
      })
    );
  }
}
