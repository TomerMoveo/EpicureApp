import { RestuarantsService } from './../../services/restuarants.service';
import { ChefsService } from './../../services/chefs.service';
import { MealsService } from 'src/app/services/meals.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(3000), ]),
    ])
  ]
})

export class MainContentComponent implements OnInit {
  public popularCards: any;
  public signatureCards: any;
  public chefCards: any;

  constructor(
    private http: HttpClient,
    // private popularService: PopularService,
    // private signatureService: SignatureService,
    private chefsService: ChefsService,
    private mealsService: MealsService,
    private restuarantsService: RestuarantsService
    ) { }

  ngOnInit() {
    this.getResByChef();
    this.getPopular();
    this.getSignature();
    // this.getRestuarants();
    // this.getMeals();
    // this.getChefs();
  }

  // public getRestuarants() {
  //   this.restuarantsService.getRestuarants().subscribe(res => {
  //     if (res) {
  //       // debugger
  //       this.popularCards = res;
  //     }
  //     }, err => {
  //       console.log(err);
  //     });
  //   }
  public getPopular() {
    this.restuarantsService.getPopularRes().subscribe(res => {
      if (res) {
        // debugger
        this.popularCards = res;
      }
      }, err => {
        console.log(err);
      });
    }
  public getSignature() {
    this.mealsService.getSignatureMeals().subscribe(res => {
      if (res) {
        this.signatureCards = res;
      }
      }, err => {
        console.log(err);
      });
    }
  public getResByChef() {
    this.chefsService.getRestuarantsByChef().subscribe(res => {
      if (res) {
        this.chefCards = res;
      }
      }, err => {
        console.log(err);
      });
    }
 // public getChefs() {
  //   this.chefsService.getChefs().subscribe(res => {
  //     if (res) {
  //       this.chefCards = res;
  //     }
  //     }, err => {
  //       console.log(err);
  //     });
  //   }
  // public getMeals() {
  //   this.mealsService.getMeals().subscribe(res => {
  //     if (res) {
  //       this.signatureCards = res;
  //     }
  //     }, err => {
  //       console.log(err);
  //     });
  //   }
}






// # Popular Cards
  // popularCardsArray = [
  //   {image: 'assets/main-contant/claro.png', title: 'Claro', chefName: 'Ran Shmueli'},
  //   {image: 'assets/main-contant/lumina.png', title: 'Lumina', chefName: 'Meir Adoni'},
  //   {image: 'assets/main-contant/tiger-lilly.png', title: 'Tiger Lilly', chefName: 'Yanir Green'},
  // ];

// # Signature Cards
  // signatureCardsArray = [
  //   {
  //     title: 'Tiger Lilly',
  //     image: 'assets/main-contant/third/Pad_Ki_Mao.jpg',
  //     dishName: 'Pad Ki Mao',
  //     description: 'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
  //     icon: 'assets/main-contant/fourth/spicy-icon.svg',
  //     priceIcon: 'assets/main-contant/third/shekel-icon.png',
  //     price: '88'
  //   },
  //   {
  //     title: 'Kab Kem',
  //     image: 'assets/main-contant/third/Garbanzo_Frito.jpg',
  //     dishName: 'Garbanzo Frito',
  //     description: 'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
  //     icon: '',
  //     priceIcon: 'assets/main-contant/third/shekel-icon.png',
  //     price: '98'
  //   },
  //   {
  //     title: 'Popina',
  //     image: 'assets/main-contant/third/Smoked_Pizza.jpg',
  //     dishName: 'Smoked Pizza',
  //     description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
  //     icon: 'assets/main-contant/fourth/vegan-icon.svg',
  //     priceIcon: 'assets/main-contant/third/shekel-icon.png',
  //     price: '65'
  //   },
  // ];

// # Chef Cards
  // miniCards = [
  //   {image: 'assets/main-contant/fifth/onza.png', title: 'Onza'},
  //   {image: 'assets/main-contant/fifth/kitchen-market.png', title: 'Kitchen Market'},
  //   {image: 'assets/main-contant/fifth/mashia.png', title: 'Mashia'},
  // ];
