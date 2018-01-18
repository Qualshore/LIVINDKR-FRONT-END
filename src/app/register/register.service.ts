import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpErrorResponse, HttpHeaders,HttpRequest } from '@angular/common/http';

@Injectable()
export class RegisterService {

  file: File;
  
  constructor(private http:HttpClient) { }

  Save_Inscription(file,utilisateur) {

      this.file = file;
      const userBlob = new Blob([JSON.stringify(utilisateur)],{ type: "application/json"});
      
      let formData: FormData = new FormData();
      formData.append('file', this.file);
      formData.append('user',userBlob);

      const req = new HttpRequest('POST', 'http://localhost:8181/inscription', formData);
      return this.http.request(req);
    }

}
