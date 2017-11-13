import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  //encapsulation: ViewEncapsulation.None  
})
export class UserComponent implements OnInit {
  
  //grab the parameters
  name:any;
  // When I call the page I need a subscriber to activate and grab the name
  sub:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    });
  }

}
