import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-all-test-center',
  templateUrl: './get-all-test-center.component.html',
  styleUrls: ['./get-all-test-center.component.css']
})
export class GetAllTestCenterComponent implements OnInit {

  success: string;
  failure: string;

  testId1;
  centerId1;
  centerName1;
  tests: Test[];
  center;

  constructor(private auth: AuthenticationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { 
                 
                activatedRoute.queryParams.subscribe(data => {
                  this.center = data;
                });
                this.getAllTesCenter();
              }
              
  ngOnInit() {
  }


  getAllTesCenter() {
    console.log("ashdgvjhasdkkjas");
    console.log(this.center);
    this.auth.getAllTestCenter(this.center).subscribe(data => {
      console.log(data);
      if(data.statusCode === 201) {
        this.tests = data.test;
        this.success = data.description;
        setTimeout(() => {
          this.success = null;
        }, 2000);
      } else {
        this.failure = data.description;
        setTimeout(() => {
          this.failure = null;
        }, 2000);
      }
    });
  }

  removeTest(dTest: Test) {
    this.auth.deleteTest(dTest).subscribe(data => {
      console.log(data);
      if(data.statusCode === 201) {
        this.tests.splice(this.tests.indexOf(dTest),1);
        this.success = data.description;
        setTimeout(() => {
          this.success = null;
        }, 2000);
      }
    });
  }

  updateTest(test) {
    this.router.navigate([`update-test/${test.testId}`], {
      queryParams: {
        testId: test.testId,
        centerId: test.centerId,
        testName: test.testName
      }
    });
  }
}
