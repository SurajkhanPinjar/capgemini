import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {
  success: string;
  failure: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  addCenter(form: NgForm) {
    this.auth.addCenter(form.value).subscribe( data => {
      console.log(data);
      if (data.statusCode === 201) {
        this.success = data.description;
        setTimeout(() => {
          this.success = null;
        }, 2000);
        form.reset();
      } else {
        this.failure = data.description ;
        setTimeout(() => {
          this.failure = null;
        }, 2000);
      }
    });
  }

}
