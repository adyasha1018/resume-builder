import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  users: User[];
  loginModel =  new User('Adyasha', '1234');
  errorMsg = '';
  currentUser: User;
  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router, private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.localStorage.store('myUsers', data);
      }
    );
  }

  loginUser(userInfo: User): void {
    this.users = this.localStorage.retrieve('myUsers');
    this.users = this.users.filter( obj => {
      return  obj.password === userInfo.password;
      });
      this.router.navigate(['/dashboard', this.users[0].name], { relativeTo: this.route });
      if (!this.users.length) {
        this.errorMsg = 'No record found';
      }
  }
  cancel() {
    this.router.navigate(['']);
  }
}
