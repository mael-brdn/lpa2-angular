import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../api_burger/api/burgers.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgerList;

  constructor(private burgersService : BurgersService) { }

  ngOnInit() {
    this.getBurgers();
  }

  getBurgers(): void {
    this.burgerList = this.burgersService.listBurgers().subscribe(burgerList => this.burgerList = burgerList);
  }
}
