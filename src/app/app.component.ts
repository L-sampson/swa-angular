import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

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
    this.http.get<{message: string}>(`${environment.apiUrl}/api/message`).subscribe(
      (data) => {
        this.message = data.message;
        console.log('Message from backend:', data); // Debugging
      },
      (error) => {
        console.error('Error fetching message:', error); // Handle error
      }
    );
  }
}
