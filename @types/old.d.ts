declare type MyPartial<T> = {
    [P in keyof T]?: T[P];
};
interface Person {
    name: string;
    age: number;
}
interface PartialPerson {
    name?: string;
    age?: number;
}
declare function updatePerson(person: Person, prop: MyPartial<Person>): {
    name: string;
    age: number;
};
declare const person: MyPartial<Person>;
