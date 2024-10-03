import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person, PersonCard } from '../home/home.page';
import { PersonalCardComponent } from '../share/components/personal-card/personal-card.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {
  
  @Output() person = new EventEmitter<PersonCard>()

  name:string = "";
  surname:string = "";
  age:number = 0
  isFav:boolean = false;


  constructor() { }

  ngOnInit() {}

  addPerson(){
    if (this.name != "" && this.surname != "" && this.age != 0){
      this.person.emit({
        id: "",
        name: this.name,
        surname: this.surname,
        age: this.age,
        isFav:false
      })
    }
  }

}
