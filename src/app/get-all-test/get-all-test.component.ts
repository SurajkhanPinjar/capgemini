import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-test',
  templateUrl: './get-all-test.component.html',
  styleUrls: ['./get-all-test.component.css']
})
export class GetAllTestComponent implements OnInit {
  success: string;
  failure: string;

  tests: Test[];

  constructor(private auth: AuthenticationService,
              private router: Router) {
    this.getAllTest();
   }

  ngOnInit() {
  }

  getAllTest() {
    this.auth.getAllTest().subscribe(data => {
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
