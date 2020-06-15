import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  success: string;
  failure: string;
  
  centerId1;
  centerName1;

  constructor(private auth: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
                activatedRoute.queryParams.subscribe(data => {
                  console.log(data.centerId);
                  this.centerId1 = data.centerId;
                });
                activatedRoute.queryParams.subscribe(data => {
                  console.log(data);
                  this.centerName1 = data.centerName1;
                })
               }

  addTest(form: NgForm) {
    this.auth.addTest(form.value).subscribe(data => {
      if(data.statusCode == 201) {
        console.log(data);
        setTimeout(() => {
          this.success = data.description;
        }, 2000);
        form.reset();
      } else {
        setTimeout(() => {
          this.failure = data.description;
        },2000);
      }
    })
  }
  ngOnInit() {
  }

}
