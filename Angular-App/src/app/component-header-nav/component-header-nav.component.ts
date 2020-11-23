import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth/services/auth-guard.service';

@Component({
  selector: 'app-component-header-nav',
  templateUrl: './component-header-nav.component.html',
  styleUrls: ['./component-header-nav.component.css']
})

export class ComponentHeaderNavComponent implements OnInit {

  constructor(private router: Router, private authGuardSvc: AuthGuardService) { }

  userLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authGuardSvc.UserStateChanged.subscribe((userState) => {
      this.userLoggedIn = userState;
    });
  }

  logoutUser() {
    this.authGuardSvc.logoutUser();
    this.router.navigate(['/home']);
    localStorage.removeItem("AuthToken");
  }
}
