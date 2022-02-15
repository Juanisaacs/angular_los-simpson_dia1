import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Home';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public hero: Hero;

  constructor() {
    this.hero = {
      img: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYXUEuHZrKX13oV-NU2VKhj2A3LsqBETn0g&usqp=CAU',
        alt: 'Los simpson family'
      },
      description: "La comedia de dibujos animados se centra en una familia que vive en la ciudad de Springfield. La cabeza de la familia Simpson es Homero, quien no es un hombre de familia típico, obrero de una planta nuclear, él hace lo mejor para poder liderar a su familia",
    }
  }

  ngOnInit(): void {
  }

}
