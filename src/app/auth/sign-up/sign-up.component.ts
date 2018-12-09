import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from './../../user';
import { UserService } from './../../user.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  users: User[];
  signUpModel = new User('', '');
  errorMsg = '';
  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router, private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.localStorage.store('myUsers', data);
      }
    );
  }
  signUpUser(userInfo: User): void {
    this.users = this.localStorage.retrieve('myUsers');
    this.userService.addUser(userInfo)
    .subscribe(
      (user) => {
        this.users.push(user);
        this.localStorage.store('myUsers', this.users);
        this.router.navigate(['/dashboard', user.name], { relativeTo: this.route });
      },
      error => this.errorMsg = error.statusText
    );
  }
  cancel() {
    this.router.navigate(['']);
  }


}
