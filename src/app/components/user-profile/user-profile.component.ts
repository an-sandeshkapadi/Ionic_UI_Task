import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {  IonIcon } from '@ionic/angular';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { ApicallService } from 'src/app/Api/apicall.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  imports:[IonButton,IonContent]
})
export class UserProfileComponent  implements OnInit {
// private router : Inject(Router);
  constructor(
    private ApiService: ApicallService,
    private router: Router
  ) { }
  logOut(){
    this.router.navigate(['/signin']);
    //  this.logOuttoken();
    localStorage.removeItem('token');

    
  }
  logOuttoken() {
    this.ApiService.logout().subscribe(
      (response) => {
        console.log('Logout Successful:', response);
     ;

    // navigate to login page
    

      },
      (error) => {
        console.error('Logout Failed:', error);
      }
    );
  }
  ngOnInit() {}
  
}
