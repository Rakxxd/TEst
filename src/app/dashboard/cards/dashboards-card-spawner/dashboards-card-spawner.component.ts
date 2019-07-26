import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DashboardCard} from '../dashboard-card';

@Component({
  selector: 'app-dashboard-cards-spawner',
  templateUrl: './dashboards-card-spawner.component.html',
  styleUrls: ['./dashboards-card-spawner.component.css']
})
export class DashboardCardSpawnerComponent implements OnInit {
  @ViewChild('spawn', {read: ViewContainerRef, static:true}) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  @Input() set card(data: DashboardCard) {
    if (!data) {
      return;
    }
    let inputProviders = Object.keys(data.input).map((inputName) => {
      return {provide: data.input[inputName].key, useValue: data.input[inputName].value, deps: []};
    });


    inputProviders = inputProviders.concat(data.services)


    const injector = Injector.create(inputProviders, this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(data.component);
    const component = factory.create(injector);
    this.container.insert(component.hostView);
  }

  ngOnInit() {
  }

}
