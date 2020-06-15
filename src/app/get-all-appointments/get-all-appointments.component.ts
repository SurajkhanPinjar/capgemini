import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-get-all-appointments',
  templateUrl: './get-all-appointments.component.html',
  styleUrls: ['./get-all-appointments.component.css']
})
export class GetAllAppointmentsComponent implements OnInit {

  success: string;
  failure: string;
  allAppointment: Appointment;

  constructor(private auth: AuthenticationService) {
              this.getAllAppointments();
  }

  ngOnInit() {
  }

  getAllAppointments() {
    this.auth.getAllAppointments().subscribe( data => {
      console.log(data);
      if  (data.statusCode === 201) {
        this.allAppointment = data.appointment;
        setTimeout(() =>{
          this.success = data.description;
        }, 2000);
      } else {
        setTimeout(() =>{
          this.failure = data.description;
        }, 2000);
      }
    });
  }

  approveAppointments(appointment: Appointment) {
    console.log("hi");
    console.log(appointment);
    var myJSON = JSON. stringify(appointment);
    console.log(myJSON);
    this.auth.approveAppointment(appointment).subscribe( data => {
      console.log(data);
    })


  }


}
