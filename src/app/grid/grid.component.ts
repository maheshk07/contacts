      import { Contact } from './../contact.model';
      import { ContactsService } from './../contacts.service';
      import { Component, OnInit, ViewChild } from '@angular/core';
      import { Router } from '@angular/router';
      import { HttpClient} from '@angular/common/http';
      import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  contacts: Contact[] = [];
  editdata:any=[];  
  Contact:any;
  searchKeyword: string;   

  private constactsSub: Subscription;
  message: any;
  geolocationPosition: Position;
  imgURL: any;
  imagePath: any;
  imageBinaryData: string;



  constructor(private router: Router, public contactsService: ContactsService , private http:HttpClient) {   }


  ngOnInit() {
  this.getContactsData();
  }



    getContactsData(){
    this.contactsService.getContact().subscribe(data=>{
      console.log(data); //"data" is coming from database
      this.contacts=data;
      if(this.contacts){
        // console.log(this.contacts);
        this.contacts.sort((a,b)=>{
        if(a.firstName>b.firstName){
        return 1;
          }
        else if(a.firstName<b.firstName){
        return -1;
          }
          else
          return 0;
        })
       }  
       });
       }

delete(i){ //delete function
  this.Contact=i;
  console.log(this.Contact)
  this.contactsService.deleteContact(this.Contact).subscribe(data=>{
  console.log(data);
  // form.resetForm();  
  window.location.reload(); 
});
}


edit(v) {
this.editdata=v;
}

updateContact(){
  console.log(this.editdata.image=this.imgURL);
  this.contactsService.updateContact(this.editdata).subscribe(data=>{
// console.log(data);
// this.message=data.message;
    this.getContactsData();
    });
  }


update(){
  this.router.navigate(['/home']);
}
 

button(){
  if(this.contacts){
// console.log(this.contacts);
  this.contacts.sort((a,b)=>{
  if(a.firstName>b.firstName){
  return 1
 }
 else if(a.firstName<b.firstName){
 return -1;
}
else
return 0;
});
}   
}


onbutton(){
   if(this.contacts){
    // console.log(this.contacts);
    this.contacts.sort((a,b)=>{
    if(a.firstName<b.firstName){
    return 1;
      }
    else if(a.firstName>b.firstName){
    return -1;
      }
      else
      return 0;
    });
    }  
    }
keyPress(event: any){
  let pattern = /[0-9\+\-\ ]/;
  let inputChar = String.fromCharCode(event.charCode);
  if(event.keyCode != 8 && !pattern.test(inputChar)){
  event.preventDefault();
  }
  }


cancle(){
window.location.reload();
}

preview(files) {
// console.log(files);
if (files.length === 0)
return;
var mimeType = files[0].type;
if(mimeType.match(/image\/*/) == null) {
this.message = "Only images are supported.";
return;
}
var reader = new FileReader();
this.imagePath = files;
reader.readAsDataURL(files[0]); 

reader.onload = (_event) => { 


this.imageBinaryData =reader.result.toString();
this.imgURL = reader.result;
var encodedString = btoa(this.imgURL);
// console.log('decodedString', this.imgURL);


}

}

}

