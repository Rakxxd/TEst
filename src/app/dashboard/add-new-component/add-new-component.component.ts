import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../cards/dashboard-card'
import { DashboardCardsService} from '../services/dashboard-card.service';
import { DashboardUserComponent } from '../cards/dashboard-user/dashboard-user.component';
import { ComponentsModelc } from '../../model/coponents-model'

@Component({
  selector: 'app-add-new-component',
  templateUrl: './add-new-component.component.html',
  styleUrls: ['./add-new-component.component.css']
})
export class AddNewComponentComponent implements OnInit {

  dashboardCard: DashboardCard;
  compmodl: ComponentsModelc;
 

  constructor(private service: DashboardCardsService,
    ) { }

  ngOnInit() {
    this.compmodl = new ComponentsModelc();
    
  }

 // let value =DashboardCard._input

  
  saveContact() {
    this.service.addCard(new DashboardCard(
      {
        name: {
          key: DashboardCard.metadata.NAME,
          value: this.compmodl.name
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
          value: this.compmodl.color
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
