import { Component, OnInit } from '@angular/core';
import { ConfigService } from './service/config-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private configService: ConfigService) {

  }

  ngOnInit() {

    console.log("in on Init of App Component:::::::::");
    this.configService.getData();

    this.configService.getUserData();
    
  }
}
