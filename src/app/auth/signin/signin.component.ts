import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authSrc : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    const formValue = form.form.value
    console.log("The Form Values", formValue)
    this.authSrc.signInUser(formValue.username, formValue.password)
  }

}
