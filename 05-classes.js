class Summa {}
const summa = new Summa();
console.info(summa)

class Students {

    // Constructors allow us to set the values for the properties of an object during creation.
    constructor(name, patronus, pet){
        this.name = name;
        this.patronus = patronus;
        this.pet = pet;
    }

    name_sollu(){
        console.log("I am " + this.name)
    }
}

// creating objects from the classe
const student1 = new Students("Harry Potter", "Stag", "Hedwig the Snow Owl");
const student2 = new Students("Ron Weasley", "Jack Russel Terrier", "Scabbers the Rat");
const student3 = new Students("Hermione Granger", "Otter", "Crookshanks the Cat");
console.log(student1)
console.log(student1.name) // .(dot) operator is used to read/access the property of an object
console.log(student2)
console.log(student2.name)
console.log(student3)
console.log(student3.name)
student1.name_sollu()
student2.name_sollu()
student3.name_sollu()
