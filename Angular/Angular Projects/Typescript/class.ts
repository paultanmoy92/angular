import { User } from "./interface";

class Employee{
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string){
        this.id = id;
        this.name = name;
        this.address = address;
    }

}

let emp = new Employee(1, 'tanmoy','Hyderabad');
// emp.id= 1;
// emp.name='tanmoy';
// emp.address='Hyderabad';
//console.log(emp);

let [user1, user2, ...restUsers] : User [] = [
    { name: "John1", id:1, email:""},
    { name: "John2", id:2, email:""},
    { name: "John3", id:3, email:""},
    { name: "John4", id:4, email:""},
    { name: "John5", id:5, email:""}
]

console.log(user1);
console.log(user2);
console.log(restUsers);