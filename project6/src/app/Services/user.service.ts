import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERModul } from '../Component/register/UserModule';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL: string = "https://form-templet-drive-default-rtdb.firebaseio.com/users.json"
  
  constructor(private http: HttpClient) { }

  addUser(user: USERModul) {
    return this.http.post<any>(this.baseURL, user);
  }
}
