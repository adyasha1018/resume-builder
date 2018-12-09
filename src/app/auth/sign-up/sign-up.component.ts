import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from './../../user';
import { UserService } from './../../user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  users: User[];
  signUpModel = new User('Adi', 'qaws', 123);
  errorMsg = '';
  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  signUpUser(userInfo: User): void {
    this.userService.addUser(userInfo)
    .subscribe(
      (user) => {
        console.log(user);
        this.router.navigate(['/dashboard'], { relativeTo: this.route });
      },
      error => this.errorMsg = error.statusText
    );
  }


}
