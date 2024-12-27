import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<string>('api/message').subscribe((data) => {
      this.message = data;
    })
  }
}
