import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../api_burger/api/burgers.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {

  burger;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private burgersService : BurgersService) { }

  ngOnInit() {
    this.getBurger();
  }

  goBack(): void {
    this.location.back();
  }

  getBurger(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.burger = this.burgersService.burgerDetail(id).subscribe(burger => this.burger = burger);;
  }
}
