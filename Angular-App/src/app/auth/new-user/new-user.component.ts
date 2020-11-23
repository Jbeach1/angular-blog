import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userSvc: UserService, private authSvc: AuthGuardService, private router: Router) { }
  newUser: User;
  errorMsg = '';
  ngOnInit(): void {
    this.newUser = new User();
  }

  CreateNewUser() {
    this.userSvc.CreateNewUser(this.newUser).subscribe((returnedUser) => {
      this.errorMsg = '';
      this.router.navigate(['/login', { currentUserId: returnedUser.userId }]);
    }, (error) => {
      this.errorMsg = error.error.messsage;
    })
  }
}
