import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: String;
  Failure: String;


  constructor(private auth: AuthenticationService,
              private router: Router) { }

              loginUser(form: NgForm){
                this.auth.loginUser(form.value).subscribe(data => {
                  console.log(data);
                  if(data.statusCode === 201){
                    this.success = data.description;
                    localStorage.setItem('userDetails', JSON.stringify(data.user['0']));
                    if(data.user['0'].role === 'admin') {
                        this.router.navigateByUrl('add-center');
                    }
                  } else {
                    this.Failure = data.description;
                    console.log('user details Stored in local Storage');
                    setTimeout(() => {
                      this.Failure = null;
                    },3000);
                    form.reset();
                  }
                })
              }

  ngOnInit() {
  }

}
