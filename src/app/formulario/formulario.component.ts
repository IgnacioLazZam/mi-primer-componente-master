import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../home/home.page';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {
  
  @Output() person = new EventEmitter<Person>()

  name:string = "";
  surname:string = "";
  age:number = 0


  constructor() { }

  ngOnInit() {}

  addPerson(){
    if (this.name != "" && this.surname != "" && this.age != 0){
      this.person.emit({
        name: this.name,
        surname: this.surname,
        age: this.age
      })
    }
  }

}
