//////////////////////////////////////////////////////////////
///////////////////////// Exercise 1 /////////////////////////
//////////////////////////////////////////////////////////////


class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender= gender;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  get email() {
    return this._email;
  }
  set email(newEmail) {
    this._email = newEmail;
  }

  get gender() {
    return this._gender;
  }
  set gender(newGender) {
    this._gender = newGender;
  }

  toString() {
    return `Author: ${this._name}, Email: ${this._email}, Gender: ${this._gender}.`
  }
}

class Book {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.price = data.price;
    this.quantity = data.quantity;
  }
  get title() {
    return this._title
  }
  set title(newTitle) {
    this._title = newTitle;
  }

  get author() {
    return this._author
  }
  set author(newAuthor) {
    this._author = newAuthor;
  }

  get price() {
    return this._price
  }
  set price(newPrice) {
    this._price = newPrice;
  }

  get quantity() {
    return this._quantity
  }
  set quantity(newQuantity) {
    this._quantity = newQuantity;
  }

  getProfit() {
    return this._price * this._quantity
  }

  toString() {
    return `Book { Title: ${this._title}, Author: ${this._author.toString()}, Price: ${this._price}, Quantity: ${this._quantity} }`;
  }
}

const bookData = {
  title: 'Властелин колец',
  author: new Author('Tolkin', 'meruzhan@gmail.com', 'male'),
  price: 500,
  quantity: 1000
};


//////////////////////////////////////////////////////////////
///////////////////////// Exercise 2 /////////////////////////
//////////////////////////////////////////////////////////////

class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    this._balance = newBalance;
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    if(amount > this._balance) {
      console.log('Amount exceeded balance.');
    } else {
      this._balance -= amount;
      return this._balance;
    }
  }

  transferTo(anotherAccount, amount) {
    if(amount > this._balance) {
      console.log('Amount exceeded balance.');
    } else {
      this._balance -= amount;
      anotherAccount._balance += amount;
      return this._balance;
    }
  }

  toString() {
    return `Account: { ID: ${this._id}, Name: ${this._name}, Balance: ${this._balance} }`;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst._id === accountSecond._id &&
           accountFirst._name === accountSecond._name &&
           accountFirst._balance === accountSecond._balance;
  }
}


//////////////////////////////////////////////////////////////
///////////////////////// Exercise 3 /////////////////////////
//////////////////////////////////////////////////////////////

class Person {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.gender = data.gender;
    this.age = data.age;
  }

  get firstName() {
    return this._firstName
  }
  set firstName(newName) {
    this._firstName = newName
  }

  get lastName() {
    return this._lastName
  }
  set lastName(newLastName) {
    this._lastName = newLastName
  }

  get gender() {
    return this._gender
  }
  set gender(newGender) {
    this._gender = newGender
  }

  get age() {
    return this._age
  }
  set age(newAge) {
    this._age = newAge
  }

  toString() {
    return `Person: {Firstname: ${this._firstName}, Lastname: ${this._lastName}, Gender: ${this._gender}, Age: ${this._age}}`;
  }
}

const person = new Person({
  firstName: 'Levon',
  lastName: 'Harutyunyan',
  gender: 'male',
  age: 30
});


class Student extends Person {
  constructor (data) {
    super(data);
    this.program = data.program;
    this.year = data.year;
    this.fee = data.fee;
    this.exams = {}
  }

  get program() {
    return this._program
  }
  set program(newProgram) {
    this._program = newProgram
  }

  get year() {
    return this._year
  }
  set year(newYear) {
    this._year = newYear
  }

  get fee() {
    return this._fee
  }
  set fee(newFee) {
    this._fee = newFee
  }

  passExam(program, grade) {

    if(!this._program.includes(program)) {
      console.log(`The program ${program} is not in the student's study program.`);
      return;
    }

    this._exams[program] = grade
    const passedAllExams = this._program.every(program => this._exams[program] >= 50)
    
    if(passedAllExams) {
      this._year += 1;
    }
  }


  toString() {
    return `${super.toString()} Student: {Program: ${this._program.join(', ')}, Year: ${this._year}, Fee: ${this._fee}`;
  }
}

const student = new Student({
  firstName: 'Vitali',
  lastName: 'Sargsyan',
  gender: 'male',
  age: 20,
  program: ['Math', 'Geography', 'Literature'],
  year: 1,
  fee: 5000
})

class Teacher extends Person {
  constructor(data) {
    super(data)
    this.program = data.program;
    this.pay = data.pay;
  }

  get program() {
    return this._program
  }
  set program(newProgram) {
    this._program = newProgram
  }

  get pay() {
    return this._pay
  }
  set pay(newPay) {
    this._pay = newPay
  }

  toString() {
    return `${super.toString()} Teacher: {Program: ${this._program}, Pay: ${this._pay}`;
  }
}
