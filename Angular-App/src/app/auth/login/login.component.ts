import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSvc: UserService, private authSvc: AuthGuardService, private router: Router, private activatedRoute: ActivatedRoute) { }
  userId: string = '';
  password: string = '';
  errorMsg = '';
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('currentUserId');
  }

  UserLogin() {
    this.userSvc.UserLogin(this.userId, this.password).subscribe((returnedToken) => {
      this.authSvc.setUserLoggedIn(returnedToken);
      this.errorMsg = '';
      this.router.navigate(['/secret-place']);
    }, (error) => {
      console.log(error);
      this.errorMsg = error.error.messsage;
    })
  }

}
