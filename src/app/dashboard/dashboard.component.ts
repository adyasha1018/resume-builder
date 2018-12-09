import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  constructor(private localStorage: LocalStorageService, private route: ActivatedRoute) { }

  ngOnInit() {
    const currentUserList = (this.localStorage.retrieve('myUsers'));
    this.route.params.subscribe( params => {
      this.currentUser =  currentUserList.filter(user => {
        return user.name === params.name;
      });
      console.log(this.currentUser);
     }
    );
  }

}
