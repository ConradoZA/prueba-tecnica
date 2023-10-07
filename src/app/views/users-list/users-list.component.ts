import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private http: HttpService) {}

  usersData: any[] = [];

  async ngOnInit() {
    this.usersData = await this.http.getAllUsers();
  }
}
