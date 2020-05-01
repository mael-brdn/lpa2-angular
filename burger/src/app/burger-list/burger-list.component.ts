import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../api_burger/api/burgers.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgerList;
  breakpoint: number;
  colspan: number;

  constructor(private burgersService: BurgersService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 6;
    this.setColspan(this.breakpoint);
    this.getBurgers();
  }

  getBurgers(): void {
    this.burgerList = this.burgersService.listBurgers().subscribe(burgerList => this.burgerList = burgerList);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 6;
    this.setColspan(this.breakpoint);
  }

  setColspan(breakpoint: number){
    if (this.breakpoint === 1){
      this.colspan = 1;
    }
    else {
      this.colspan = 2;
    }
  }

}
