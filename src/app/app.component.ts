import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-frontend';
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<string>('api/message').subscribe((data) => {
      this.message = data;
    })
  }
}
