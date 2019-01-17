import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input()
  user: User;
  qualification: string;
  @Output() msgEvent = new EventEmitter<string>();
  experience = '4 years';
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }
  changeUserInfo() {
    this.msgEvent.emit('Devidatta');
  }
}
