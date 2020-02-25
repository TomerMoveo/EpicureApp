import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-signature-dish',
  templateUrl: './signature-dish.component.html',
  styleUrls: ['./signature-dish.component.css']
})
export class SignatureDishComponent implements OnInit {

  @Input() signatureCard: any;

  constructor() { }

  ngOnInit() {
  }

}
