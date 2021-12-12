// TODO: static method and static property
class People {
    constructor() { }

    static getRoleName: string = "Admin";

    static getNameRole() {
        return "hei";
    }
}

// call the static property
export let people = People.getRoleName;
console.log(people); // Admin

// call the static method
export let name = People.getNameRole();
console.log(name); // hei