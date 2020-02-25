import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-popular-resturants',
  templateUrl: './popular-resturants.component.html',
  styleUrls: ['./popular-resturants.component.css']
})
export class PopularResturantsComponent implements OnInit {

@Input() popularCard: any;

// # public method here V making an property of this dataPopular - available in the file from everywhere
  constructor() {

  }

  ngOnInit() {
  }

}
