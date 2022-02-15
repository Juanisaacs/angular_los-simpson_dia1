import { Component, OnInit } from '@angular/core';
import { Image} from '../../../../../app/shared/models/Shared'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public name: string;
  public image: Image;
  
  constructor() {
    this.name = 'LOS SIMPSONS';
    this.image = { src: '../../../assets/images/logo.png'}
   }

  ngOnInit(): void {}

  public changeName() {
    this.name = this.name === 'LOS SINPSONS' ? 'famila' : 'FAMILIA SIMPSONS';    
  }

}

