import { Injectable } from '@angular/core';
import { Person, PersonCard } from 'src/app/home/home.page';
import { Crud } from '../interfaces/crud';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements Crud<Person>{

  private _id:number = 1;
  private _people:BehaviorSubject<PersonCard[]> = new BehaviorSubject<PersonCard[]>([{id: "1", name: "Ignacio", surname: "Lázaro", age:18, isFav:false}])
  private people$:Observable<PersonCard[]> = this._people.asObservable()


  constructor() { }

  add(element: PersonCard) {
    try {
      element.id = (this._id++).toString();
      let people:PersonCard[] = this._people.getValue()
      people.push(element)
      this._people.next(people)
      return element;
    } catch (error) {
      return null
    }
    
  }

  remove(element: PersonCard) {
    try {
      let people:PersonCard[] = this._people.getValue()
      let idx = people.findIndex(person => person.id==element.id);
    let person = people[idx];
    people.splice(idx,1)
    this._people.next(people)
    return person
    } catch (error) {
      return null
    }
    
  }

  update(element: PersonCard) {
    try {
    let people:PersonCard[] = this._people.getValue()
    let idx = people.findIndex(person => person.id==element.id);
    let person = people[idx];
    people[idx] = element;
    this._people.next(people)
    return person
    } catch (error) {
      return null
    }
  }

  getAll(): PersonCard[] {
    let people:PersonCard[] = this._people.getValue()
    return people;
  }

  get(id: string):PersonCard | null {
    let index = this._people.getValue().findIndex(p => p.id = id)
    return this._people.getValue()[index]
  }

  getObservable():Observable<PersonCard[]>{
    return this.people$;
  }

  changeFav(id:number){
    let guy:PersonCard | null =  this.get(id.toString())
    guy!!.isFav = !guy!!.isFav
  }
}
