import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authSrc : AuthService,private route : ActivatedRoute,
     private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    const formValue = form.form.value
    console.log("The Form Values", formValue)
    this.authSrc.signUpUser(formValue.username, formValue.password)
  }

}
