import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  valid: boolean;
  isSubmited: boolean;
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
  }
  login() {
    console.log(this.loginForm);
    if (this.loginForm.value.email === 'vrushabh@ty.com' && this.loginForm.value.password === 'Password@123') {
      this.valid = true;
      console.log(this.valid);
      localStorage.setItem('userDetails', JSON.stringify({ email: 'vrushabh@ty.com', password: 'Password@123' }));
      this.route.navigateByUrl('');
    } else {
      this.isSubmited = true;
      this.valid = false;
      setInterval(() => {
        this.isSubmited = false;
      }, 5000);
      this.valid = null;
    }
    //this.loginForm.reset();
  }



  
}
