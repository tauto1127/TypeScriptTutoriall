type UUser = {name : string; age : number;}

const getName = (u : UUser): string => u.name;

const userss : UUser[] = [
    {name: "uhyo", age:26},
    {name: "John Smith", age: 15},
];

const names = userss.map(getName);
console.log(names);