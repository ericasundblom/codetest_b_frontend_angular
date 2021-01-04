import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CalculationInfo } from '../types/CalculationInfo';


const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


/**
 * Class to send requests to and recieve responses from backend
 */
@Injectable({ providedIn: 'root' })
export class CalculationService {

  private calculateUrl = environment.apiUrl+'/api/calculate'; // URL to web api

  constructor(private http: HttpClient) { }

  calculate(info: CalculationInfo): Observable<string> {
    return this.http.post<string>(this.calculateUrl, info, httpOptions);
  }

}
