import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { Contact} from './contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactsService{


constructor(private http:HttpClient) { }

  private contacts: Contact[] = [];
  private contactsUpdated = new Subject<Contact[]>();



  getContactUpdateListener() {
  return this.contactsUpdated.asObservable();
  }
  
  addContact(data:any):Observable<any>{
     console.log(data,'data');
 return this.http.post("http://localhost:3000/insertContact",data)
};

getContact():Observable<any>{
return this.http.get("http://localhost:3000/getContact");
};

deleteContact(data:any):Observable<any>{
return this.http.delete(`http://localhost:3000/deleteContact/${data._id}`);
};

updateContact(data:any):Observable<any>{
// console.log(data);
return this.http.put('http://localhost:3000/editContact',data)
};


}
    
