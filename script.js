var salon = {
    name: "Pet Salon",
    phone: "123123123",
    address: {
        street: "main",
        number: "123",
    },
    workingHours : {
        open: "9:00",
        closes: "17:00",
    },

    
    pets: []


};

console.log("The Name is " + salon.name, "and the address is " +salon.address.number+" "+salon.address.street);


function Pet(name, age, serviceType, ownerName, contactPhone) {
    this.hunger = 20;
    this.happiness=10;
    this.name = name;
    this.age = age;
    this.type = serviceType;
    this.ownerName = ownerName;
    this.ownerPhone = contactPhone;
    this.feed = function() {
        //this.hunger= this.hunger - 10; equal to line below
        this.hunger-=10;
        this.happiness+=10;
    }

    this.status = function() {
        //print the pet's status to console
        console.log(this.name, "Hunger level: " + this.hunger, "Happy level: " + this.happiness)
    }

    this.ownerContact = function() {
        console.log("The owner is " + this.ownerName, "and to contact them, call " + this.ownerPhone)
    }

}
//new specifies that you are creating a new copy of this structure
var fido = new Pet("fido",3,"Haircut","Fancy Dude", "555 123 4567");
var ozzy = new Pet("Ozzy",5,"Complete Shave", "Courtney", "847 504-6654");
var maddy = new Pet("maddy",9,"Boarding","Peter Peloquin","480-748-8373");

salon.pets.push(fido);
salon.pets.push(ozzy);
salon.pets.push(maddy);

fido.ownerContact();

alert("We have " + salon.pets.length + " pets as customers.");




