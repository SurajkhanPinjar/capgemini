import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  success: string;
  failure: string;

  constructor(private auth: AuthenticationService,
              private router: Router) { }

  loginUser(form: NgForm) {
    this.auth.loginUser(form.value).subscribe(data => {
      console.log(data);
      if (data.statusCode === 201) {
        this.success = data.description;
        localStorage.setItem('userDetails', JSON.stringify(data.adminResponse['0']));
        if (data.adminResponse['0'].role === 'admin') {
          this.router.navigateByUrl('admin');
        } else if (data.adminResponse['0'].role === 'client') {
          this.router.navigateByUrl('client');
        } else {
          this.router.navigateByUrl('scheduler');
        }
      } else {
        this.failure = data.description;
        console.log('user Details Stored in local Storage');
        setTimeout(() => {
          this.failure = null;
        }, 3000);
      }
    });
  }

  ngOnInit() { }

}
