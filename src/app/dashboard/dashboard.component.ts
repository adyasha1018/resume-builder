import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  currentUser: User[];
  userList: User[];
  editedUser: User;
  totalExp: string;
  @ViewChild(EmployeeComponent) child;
  constructor(private localStorage: LocalStorageService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userList = (this.localStorage.retrieve('myUsers'));
    this.route.params.subscribe( params => {
      this.currentUser =  this.userList.filter(user => {
        return user.name === params.name;
      });
     }
    );
  }
  edit(user: User) {
    this.editedUser = user;
  }
  update() {
    if (this.editedUser) {
      // this.userService.updateUser(this.editedUser).subscribe(
      //   user => {
      //     const i = user ? this.currentUser.findIndex(item => item.password === user.password) : -1;
      //     if (i > -1) { this.currentUser[i] = user; }
      //   }
      // );
      const i = this.editedUser ? this.userList.findIndex(item => item.password === this.editedUser.password) : -1;
      if (i > -1) { this.userList[i] = this.editedUser; }
      console.log(this.userList);
      this.editedUser = undefined;
    }
  }

  receiveUpdatedUserInfo($event) {
    this.currentUser[0].name = $event;
  }


  ngAfterViewInit() {
    this.totalExp = this.child.experience;
  }

}
