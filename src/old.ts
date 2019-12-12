// const person = {
//     name: 'Todd',
//     age: 27
// }

// type Person = typeof person;
// type PersonKeys = keyof Person;
// type PersonTypes = Person[PersonKeys];

// function getProperty<T, K extends keyof T>(obj: T, key:K){
//     return obj[key];
// }

// const personName = getProperty(person, 'age')

type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

interface Person {
    name: string;
    age: number;
}

interface PartialPerson {
    name?: string;
    age?: number;
}

function updatePerson(person: Person, prop: MyPartial<Person>){
    return { ...person, ...prop}
}

const person: MyPartial<Person> = {
    name: 'Todd',
}

