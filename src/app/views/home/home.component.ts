import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpService) {}

  albumData: any[] = [];

  async ngOnInit() {
    if (localStorage.getItem('recently')) {
      this.albumData = JSON.parse(localStorage.getItem('recently') as string);
    } else {
      this.albumData = [
        {
          id: '0',
          title: 'No se han encontrado álbunes anteriores',
        },
      ];
    }
  }
}
