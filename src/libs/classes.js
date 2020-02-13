
import {generateKey} from './methods';

export class Teacher{
    constructor(){
        this.id = generateKey(64);
        this.firstname = null;
        this.surname = null;
        this.middlename = null;
        this.image = require("../assets/images/noname.png");
        this.telegram = null;
        this.viber = null;
        this.email = null;
    }
}

export class Opportunity{
    constructor(){
        this.id = generateKey(64);
        this.name = null;
        this.description = null;
        this.url = null;
    }
}

export class Work{
    constructor(){
        this.id = generateKey(64);
        this.name = null;
        this.description = null;
        this.url = null;
    }
}

export class LifeDepartment{
    constructor(){
        this.id = generateKey(64);
        this.image = null;
        this.title = null;
        this.lida = null;
        this.description = null;
        this.date = null;
    }
}

export class Homework{
    constructor(){
        this.id = generateKey(64);
        this.teacher = generateKey(64);
        this.title = null;
        this.description = null;
        this.date = null;
        this.link = null;
    }
}

