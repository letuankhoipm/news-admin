import { HttpService } from "./http.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService extends HttpService {
  private _userUrl = "";

  public getUsers(): Observable<any> {
    return this.get(this._userUrl);
  }

  public getUserById(userId: string): Observable<any> {
    return this.get(`${this._userUrl}/${userId}`);
  }
}
