const dog = {
    legs: 4,
    tail: true,
    sound: 'vovov vov' ,
    run(){
        // Skriv om raden kod så att egenskapen legs används istället för 4
        console.log(`running on ${this.legs} legs`);
    },
    makeSound(){
        console.log(this.sound);
    }
}

console.log(dog.legs, dog.tail)
dog.run();
dog.makeSound();