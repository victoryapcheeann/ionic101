import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://swapi.co/api/people/').subscribe(resData =>
      console.log(resData.results.map(abc => abc.name)));
  }

}
