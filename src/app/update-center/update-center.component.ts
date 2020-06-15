import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-center',
  templateUrl: './update-center.component.html',
  styleUrls: ['./update-center.component.css']
})
export class UpdateCenterComponent implements OnInit {

  success: string;
  failure: string;
  
  centerId1;
  centerName1;

  constructor(private auth: AuthenticationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
                activatedRoute.queryParams.subscribe(data => {
                  console.log(data);
                  this.centerId1 = data.centerId;
                });
                activatedRoute.queryParams.subscribe(data => {
                  console.log(data);
                  this.centerName1 = data.centerName;
                });
               }

  ngOnInit() {
  }

  updateCenter(form: NgForm) {
    this.auth.updateCenter(form.value).subscribe(data => {
      console.log(data);
      if(data.statusCode === 201) {
        this.success = data.description;
        setTimeout(() => {
          this.success = null;
          this.router.navigateByUrl('get-all-center');
        }, 2000);
      } else {
        this.failure = data.description;
        setTimeout(() => {
          this.failure = null;
        }, 2000);
      }
      form.reset();
    })
  }
}
