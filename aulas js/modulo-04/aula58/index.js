function People (name, surname){

    //private
    const ID = 123456

    const internalMethod = function(){}
    //public
    this.name = name;
    this.surname = surname;

    this.method = function () {
        console.log(this.name + ': Method')
    }
}

const p1 = new People('César', 'Luchesi')

p1.method()