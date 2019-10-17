import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Location{
  latitude:string;
  longitude:string;
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=AIzaSyBA1yR7-h1ZIX5U9h3u_Rm_GwaKbUCueQg');
  }


}
