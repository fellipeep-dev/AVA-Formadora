import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiServiceFactory } from "src/core/common/factory/api.factory";
import { WorkoutInterface } from "src/core/shared/@types/workout";



@Injectable({
  providedIn: 'root'
})
export class WorkoutService extends ApiServiceFactory<WorkoutInterface>{
  constructor(http: HttpClient) {
    super(http)
  }

  findWorkoutsByUserId(endpoint: string): Observable<WorkoutInterface[]> {
    return this.http.get<WorkoutInterface[]>(`${this.baseUrl}/${endpoint}`)
  }
}