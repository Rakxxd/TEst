import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {DashboardCard} from '../cards/dashboard-card';

@Injectable()
export class DashboardCardsService {

  constructor() {
  }

  private _cards: BehaviorSubject<DashboardCard[]> = new BehaviorSubject<DashboardCard[]>([]);

  addCard(card: DashboardCard): void {
    this._cards.next(this._cards.getValue().concat(card));
  }

  get cards(): BehaviorSubject<DashboardCard[]> {
    return this._cards;
  }

//   deleteCard(data: any) {
//     let roomArr = this._cards.getValue();
//     console.log(this._cards);
//     console.log(this.cards);
//     console.log(this._cards.getValue());

//     // roomArr.forEach((item, index) => {
//     //     if(item === data) { roomArr.splice(index, 1); }
//     // });
//     // this._cards.next(roomArr);
// }


}
