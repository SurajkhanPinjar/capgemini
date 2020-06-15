import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-get-all-center',
  templateUrl: './get-all-center.component.html',
  styleUrls: ['./get-all-center.component.css']
})
export class GetAllCenterComponent implements OnInit {

  success: string;
  failure: string;
  allCenter: center[];

  constructor(private auth: AuthenticationService,
              private route: RouterModule,
              private router: Router) {
                this.getAllCenter();
               }

  ngOnInit() {
  }

  getAllCenter()  {
    this.auth.getAllCenter().subscribe(data => {
      if(data.statusCode == 201) {
        console.log(data);
        this.allCenter = data.diagnosticCenter;
        setTimeout(() => {
          this.success = data.description;
        }, 2000);
      } else {
        setTimeout(() => {
          this.failure = data.description;
        }, 2000);
      }
    });
   }

   deleteCenter(dCenter: center) {
     this.auth.deleteCenter(dCenter).subscribe( data => {
       console.log(data);
       if(data.statusCode == 201 ) {
         this.allCenter.splice(this.allCenter.indexOf(dCenter),1);
         this.success = data.description;
       }
     });
   }

   addTest(center) {
     console.log(center);
     this.router.navigate([`add-test/${center.centerId}`], {
      queryParams: {
        centerId: center.centerId,
        centerName: center.centerName
      }
     });
   }

   updateCenter(center) {
     console.log(center);
     this.router.navigate([`update-center/${center.centerId}`], {
      queryParams: {
        centerId: center.centerId,
        centerName: center.centerName
      }
     });
   }

   getAllTest(center) {
     console.log(center);
     this.router.navigate([`get-all-test-center/${center.centerId}`], {
       queryParams: {
         centerId: center.centerId,
         centerName: center.centerName
       }
     })
   }

 
}
