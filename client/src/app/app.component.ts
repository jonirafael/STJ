import { AccountService } from './_services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'STJ WEB';
  users: any;

  constructor(private AccountService: AccountService){}

  ngOnInit(): void {
    this.setCurrentUser();
  }


  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.AccountService.setCurrentUser(user);
  }
}
