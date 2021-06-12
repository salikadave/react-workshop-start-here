//declaring class
class person {
  constructor(name, age) {
    //declaring constructor, this is called when class object is initialized
    this.name = name;
    this.age = age;
  }

  displayName() {
    console.log(this.name);
  }
}

//Creating an instance of a class i.e an object

const person1 = new person("Joe", 25);

// Using created object to call the display name method

person1.displayName();
