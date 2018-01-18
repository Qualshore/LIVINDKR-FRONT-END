import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as $ from 'jquery';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username:string;
    password:string;

  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit() {
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

  getRegister(){
    this.router.navigateByUrl('/register');
  }

  authentification(){
    this.http.post('http://localhost:8181/login',
      new HttpParams().set('pseudo', this.username).set('password', this.password)).subscribe(
      data => {
        console.log(JSON.stringify(data));
      },
      error => {
        console.log(JSON.stringify(error));
      });
      console.log(this.username);
  }

}
