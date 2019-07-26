import {Component, OnInit} from '@angular/core';
import {DashboardCard} from '../cards/dashboard-card';
import { Observable } from 'rxjs';
import {DashboardCardsService} from '../services/dashboard-card.service';
//import {ObservableMedia} from '@angular/flex-layout';

import { DashboardUserComponent } from '../cards/dashboard-user/dashboard-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  entryComponents: [DashboardUserComponent]
})
export class DashboardComponent implements OnInit {

  cards: DashboardCard[] = [];
  
  

  constructor(private cardsService: DashboardCardsService,
              ) {
    this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });
  }

  ngOnInit() {
    /* Grid column map */    
    this.createCards();
  }

  createCards(): void {
    this.cardsService.addCard(new DashboardCard(
      {
        name: {
          key: DashboardCard.metadata.NAME,
          value: 'New'
        },
        routerLink: {
          key: DashboardCard.metadata.ROUTERLINK,
          value: '/user'
        },
        iconClass: {
          key: DashboardCard.metadata.ICONCLASS,
          value: ''
        },
        // cols: {
        //   key: DashboardCard.metadata.COLS,
        //   value: this.cols_big
        // },
        // rows: {
        //   key: DashboardCard.metadata.ROWS,
        //   value: this.cols_sml
        // },
        color: {
          key: DashboardCard.metadata.COLOR,
          value: 'red'
        }
      }, DashboardUserComponent,
      {
        provide: "DashboardCardsService",
        useClass: DashboardCardsService,
        deps:[]

      }
    ));
    
  }

}
