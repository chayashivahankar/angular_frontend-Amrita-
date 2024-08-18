import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logn',
  templateUrl: './logn.component.html',
  styleUrls: ['./logn.component.scss']
})
export class LognComponent {
  data:string | undefined;
  errorMessage:string | undefined;
  constructor(private formbuilder: FormBuilder,private dataService: DataService,private router: Router,private toastr: ToastrService) {
  }
  userData:any={
    email:'',
   };
   userEmailData:any={
    email:'',

   }
   isRegistered:boolean=false;
  

  /********  User Registration  ******/

  loginUser(userData: any) {

   /*
    this.userData.email = this.userData.email; 
    this.userData.password = this.userData.password;
    this.dataService.login(userData).subscribe(response =>{ 
    console.log(response);
    */

   // this.router.navigate(["verify-email"]);




   //});
    /*
    this.dataService.verifyEmailId(this.userEmailData).subscribe(response =>{ 
      this.router.navigate(["verify-email"]);
    });   
    */

    this.dataService.login(userData).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.errorMessage = error;
        // Optionally, show a toast notification
        this.toastr.error('Invalid User Name or Password', 'Error');
      }
    );
    this.router.navigate(["home"]);
  }

}
