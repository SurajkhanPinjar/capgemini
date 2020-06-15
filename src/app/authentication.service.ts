import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = 'http://localhost:8080';
  constructor(private http: HttpClient) {

  }
  loginUser(userCredentials): Observable<any> {
    return this.http.post<any>(`${this.url}/login-user`, userCredentials);
  }

  addCenter(centerDetails): Observable<any> {
    return this.http.post<any>(`${this.url}/add-center`, centerDetails);
  }

  getAllCenter(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-all-center`);
  }

  deleteCenter(centerDetails: center): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete-center/${centerDetails.centerId}`);
  }

  updateCenter(centerDet): Observable<any> {
    return this.http.put<any>(`${this.url}/update-center`, centerDet);
  }

  addTest(testDetails): Observable<any> {
    return this.http.post<any>(`${this.url}/add-test`, testDetails);
  }

  getAllTest(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-all-test`);
  }

  getAllTestCenter(center): Observable<any> {
    console.log(center);
    return this.http.get<any>(`${this.url}/get-all-test-center/${center.centerId}`);
  }
  

  deleteTest(testDet: Test): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete-test/${testDet.centerId}`);
  }

  updateTest(testDet): Observable<any> {
    return this.http.put<any>(`${this.url}/update-test`, testDet);
  }

  getAllAppointments(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-all-appointment`);
  }
  
  approveAppointment(appointment: Appointment): Observable<any> {
    console.log("meth :"+appointment);
    return this.http.put<any>(`${this.url}/approve-appointment`, appointment);
  }

  


}
