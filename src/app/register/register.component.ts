import { RegisterService } from './register.service';
import { HttpClient, HttpParams,HttpErrorResponse, HttpHeaders,HttpRequest } from '@angular/common/http';
import { Headers, Request, RequestOptions } from '@angular/http';
import { user } from './../login/user';
import { Component, OnInit,ViewChild } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor( private http:HttpClient, private service:RegisterService) { }

    @ViewChild('filechild') filechild;
    utilisateur;
    isdakar:boolean;
    sexe:boolean;
    file: File;

  ngOnInit() {
    this.utilisateur = new user();
    this.isdakar = true;
    this.sexe = true;
    $(document).ready(function() {
            //Login animation to center 
            function toCenter() {
                var mainH = $("#main").outerHeight();
                var accountH = $(".account-wall").outerHeight();
                var marginT = (mainH - accountH) / 2;
                if (marginT > 30) {
                    $(".account-wall").css("margin-top", marginT - 15);
                } else {
                    $(".account-wall").css("margin-top", 30);
                }
            }
            toCenter();
            var toResize;
            $(window).resize(function(e) {
                clearTimeout(toResize);
                toResize = setTimeout(toCenter(), 500);
            });
        });
  }

  onSubmit(event){
    this.file = this.filechild.nativeElement.files[0];
    this.utilisateur.isdakar = this.isdakar;
    this.utilisateur.sexe = this.sexe == true ? "masculin" : "feminin";
    this.service.Save_Inscription(this.file, this.utilisateur).subscribe(
      data => {
          console.log(JSON.stringify(data));
        },
      (err: HttpErrorResponse) =>{
          console.log(JSON.stringify(err));
      });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) 
    {
      this.file = fileList[0];
      const body = JSON.stringify(this.utilisateur);
      const userBlob = new Blob([JSON.stringify(this.utilisateur)],{ type: "application/json"});
      let formData: FormData = new FormData();
      formData.append('file', this.file);
      formData.append('user',userBlob);
      let headers = new HttpHeaders();
      //headers = headers.append("Content-Type", undefined);
      headers = headers.append('Content-Type', undefined);

      const req = new HttpRequest('POST', 'http://localhost:8181/inscription', formData);
      this.http.request(req).subscribe(
        data => {
            console.log(JSON.stringify(data));
          },
        (err: HttpErrorResponse) =>{
            console.log(JSON.stringify(err));
        });
    }
  }
  
}
