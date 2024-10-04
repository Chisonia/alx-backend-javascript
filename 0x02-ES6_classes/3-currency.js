export default class Currency{
    constructor(code, name){
        this.code = code;
        this.name = name;
    }

    get code (){
        this._code = code;
    }
    get name (){
        this._name = this.name;
    }

    set code(value){
        if (typeof value !== 'string') {
            throw new TypeError('Code must be a string');
          }
        this._code = value;
    }
    set name(value){
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
          }
        this._name = value
    }

    displayFullCurrency(){
        return `${this._name}(${this._code})`;
    }
}

