export interface User{
    id: number;
    name: string;
    email: string;
    // salary: number;
}

let user: User = {name:"tanmoy", id:1, email:"" };

interface Employee extends User {
    salary: number;

}

let employee: Employee={name:"tanmoy", id:1, email:"", salary:10000};

export interface Login {
    Login(): User;
}

