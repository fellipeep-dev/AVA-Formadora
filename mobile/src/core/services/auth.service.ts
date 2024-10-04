import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthInterface } from "../shared/@types/auth";
import { Observable } from "rxjs";
import { ApiServiceFactory } from "../common/factory/api.factory";



@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiServiceFactory<AuthInterface> {
  constructor(http: HttpClient) {
    super(http)
  }

  
}