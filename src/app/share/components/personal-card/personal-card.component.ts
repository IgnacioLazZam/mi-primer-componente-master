import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PersonCard } from '../../../home/home.page';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent implements OnInit {

  @Input() name:string = "";
  @Input() surname:string = "";
  @Input() age:number = 0;
  @Input() isFav:boolean = false;
  


  // Añadir evento Event Emitter 

  @Output() isFavClick = new EventEmitter<boolean>()
  @Output() isDeleteClick = new EventEmitter<boolean>()


  // Añadir funciñon que emita el evento

  isFavClicked(){
    this.isFavClick.emit(this.isFav)
  }

  isDeleteClicked(){
    this.isDeleteClick.emit(true)
  }

  constructor() { }

  ngOnInit() {}

}
