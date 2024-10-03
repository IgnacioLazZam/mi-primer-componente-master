export interface Crud<T>{
    add(element:T):T | null;
    remove(element:T):T | null;
    update(element:T):T | null;
    getAll():T[];
    get(id:string):T | null;
}