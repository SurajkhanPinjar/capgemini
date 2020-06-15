import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  success: string;
  failure: string;

  testId1;
  centerId1;
  testName1;

  constructor(private auth: AuthenticationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
                activatedRoute.queryParams.subscribe(data => {
                  console.log(data);
                  this.testId1 = data.testId;
                });
                activatedRoute.queryParams.subscribe(data => {
                  this.centerId1 = data.centerId;
                  this.testName1 = data.testName;
                });
               }

  ngOnInit() {
  }

  updateTest(form: NgForm) {
    this.auth.updateTest(form.value).subscribe(data => {
      console.log(data);
      if(data.statusCode === 201) {
        this.success = data.description;
        setTimeout(() =>{
          this.success = null;
        }, 2000);
      } else {
        this.failure = data.description;
        setTimeout(() =>{
          this.failure = null;
        }, 2000);
      }
      form.reset();
      this.router.navigateByUrl('get-all-test')
      
    }); 
  }

}
