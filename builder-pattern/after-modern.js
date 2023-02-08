class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  // can pass default values
  constructor(name, { age, phone = 123456, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", { age: 10 });
console.log(user); // { name: 'Bob', age: 10, phone: 123456, address: undefined }
