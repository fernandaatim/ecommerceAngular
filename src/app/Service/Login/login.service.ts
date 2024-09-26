import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  // Forma 01 - Antiga
  // constructor(private http: HttpClient) { }
 
 
  // Forma 02 - Nova
  private _http = inject(HttpClient) // Quando um atributo é privado, é uma boa prática esse underline para identificação
 
  con = 'https://dummyjson.com/auth/login'
 
  logar(username: string, password: string){
    return this._http.post(this.con, {
      username: username,
      password: password
    }).pipe(
        map((res: any) => {
          return {
            email: res.email,
            firstName: res.firstName,
            lastName: res.lastName,
            image: res.image,
          };
        }
      )
    );
  }
}