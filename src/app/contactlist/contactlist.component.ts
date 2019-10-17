
import { Contact } from './../contact.model';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Component, OnInit,  } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  imgURL: any = "/assets/img/PHTC06.jpg";
  genderType="Male";
  geolocationPosition: any;
  position: [];
  // show: any;
  location: { lat: number; lng: number; };
    public imagePath;
    message: any;
   imageBinaryData:any;
  currentLat: any;
  currentLong: any;
  map: any;
  marker: any;
 
  
  name: string = 'My first AGM project';
  lat: number;
  lng: number;
  // lat1: string;
  // lng1: string;
 
 


  constructor( public ContactsService:ContactsService,private router:Router ,private http:HttpClient) { }
  public gender:any;

  onAddContact(form:NgForm){
  console.log(form.value);
    // console.log(form.value.image=this.imgURL);
    // console.log(form.value.location=this.show );
    form.value.image=this.imgURL;
    form.value.lat= this.location.lat;
    form.value.lng= this.location.lng;
  
    if(form.valid){
      console.log(form.value);
    this.ContactsService.addContact(form.value).subscribe(data=>{
    if(data.message=='That userphonenumber is taken. Try another.'){
    // alert(data.message);
    this.message=data.message;
   
    }
    else{
    form.resetForm();  
    this.router.navigate(['/home']);
    }
    });
    }
   }

  
    ngOnInit() {
      
    }

  keyPress(event: any){
    let pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if(event.keyCode != 8 && !pattern.test(inputChar)){
    event.preventDefault();
    }
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
    
  
this.imageBinaryData =reader.result;
this.imgURL = reader.result;
var encodedString = btoa(this.imgURL);
// console.log('decodedString', this.imgURL);
   

  }
  
}
 


// AddLocation(){
//     if (window.navigator && window.navigator.geolocation) {  
      
//     window.navigator.geolocation.getCurrentPosition(
//     position => {
//     this.geolocationPosition = position;
//       this.location = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//     var geocoder =   new google.maps.Geocoder();
//     var latlng = new google.maps.LatLng(this.location.lat,this.location.lng);


//     this.lat = this.location.lat;
//     this.lng = this.location.lng;

//     let requset={
//       location:latlng
//     }
//     geocoder.geocode(requset,(result,status)=>{
//       console.log(geocoder);
//       if(status===google.maps.GeocoderStatus.OK){
//         console.log(result);
//       }
//     })
    
//     });
//   };
// }


AddLocation(){  
  navigator.geolocation.getCurrentPosition(position => {
  
    this.geolocationPosition = position;
    this.location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

  var geocoder =   new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(this.location.lat,this.location.lng);

  this.lat = this.location.lat;
  this.lng = this.location.lng;  

  });
}

// Custemerlocation(){
//   console.log("Adding marker");
//   var newMarker = {
//     lat: parseFloat(this.lat1),
//     lng: parseFloat(this.lng1)
//   }
  
// }
}
