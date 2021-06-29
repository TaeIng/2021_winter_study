'use strict';

/*
// 127. Default Parameters
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // numPassengers = numPassengers || 1; // ES5방식, undefined일 경우 1
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking); // 함수 밖에서도 예약유지
}

createBooking('LH123')
createBooking('LH123', 5)

createBooking('LH123', undefined, 1000)


// 128. How Passing Arguments Works

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  
  if(passenger.passport === 24739479284) {
    alert('Check in')
  } else {
    alert('Wrong passport!')
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() *
  1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

// 자바스크립트는 C++ 같은 언어와는 달리 함수에 대한 값(Value)은 전달하지만 레퍼런스를 전달하지 않는다.


// 129. First-Class and Higher-Order Functions

// 자바스크립트는  First-citizens(First class citizen)로써 고차함수를 작성할 수 있다.

// First-citizen 이란 투표의 자유를 가진 시민이라는 것에서 비롯된 것으로
// 프로그래밍에서는 다른 객체들에게 적용 가능한 연산을 모두 지원하는 객체를 말한다.
// 즉 함수에서 함수를 받거나 반환할 수 있다는 것으로, 이를 통해 고차 함수를 만들 수 있다.
// First-class citizen 의 조건: 
// - 변수나 데이터 구조안에 담을 수 있다.
// - 파라미터로 전달할 수 있다.
// - 리턴 값으로 사용할 수 있다.
// [참고] (https://soeunlee.medium.com/javascript%EC%97%90%EC%84%9C-%EC%99%9C-%ED%95%A8%EC%88%98%EA%B0%80-1%EA%B8%89-%EA%B0%9D%EC%B2%B4%EC%9D%BC%EA%B9%8C%EC%9A%94-cc6bd2a9ecac)


// 130. Function accepting callback functions

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  
  console.log(`Transformed by: ${fn.name}`); // 콜백함수
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
  console.log('🙏');
}
document.body.addEventListener('click', high5); // 콜백함수

['Jonas', 'Martha', 'Adam'].forEach(high5);


// 131. Functions Returning Functions

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('TJ');
greet('Hey');
greet('Hi')('TJ');

// Arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`); // return 필요없음

greetArr('hello')('TJ');


// 132. The call and apply methods

const Tway = {
  airline: 'Tway',
  iataCode: 'TW',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
  },
};

Tway.book(239, 'TaeJung Kim');
Tway.book(635, 'Jonas Schmedtmann');
console.log(...Tway.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = Tway.book;

// book(23, 'Ino'); // this.를 사용할 수 없음

book.call(eurowings, 23, 'Sara'); // call은 첫번째 인자를 this키워드가 가르키도록 만듬
console.log(eurowings);

book.call(Tway, 239, 'Minho')

const jeju = {
  airline:'Jeju Air flight',
  iataCode: 'JJ',
  bookings: []
}

book.call(jeju, 583, 'Tomas')


// 133. The bind method 

console.log("------------------------");
const bookEW = book.bind(eurowings)
const bookTway = book.bind(Tway);
const bookJJ = book.bind(jeju);

bookEW(23, 'Minho')

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Tae Jung')

// With Event Listeners
jeju.planes = 300;
jeju.buyPlane = function () {
  console.log(this);
  
  this.planes++
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener
('click', jeju.buyPlane.bind(jeju))

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23; 와 같음
console.log(addVAT(100));

// 위 bind와 같은 기능
const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate
  }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

*/

// 134. Coding Challenge #1

// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      ));
    console.log(answer);

    // Register answer
    typeof answer === 'number' && answer < this.answers.length &&
    this.answers[answer]++; // answer가 number이고, 길이가 length보다 작을 때 answers 추가됨.
    // if문을 사용할 수 없을때 사용할 수 있는 야매if문..
    this.displayResult();
    this.displayResult('string');
  },

  displayResult(type = 'array') {
    if(type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  }
};

// poll.registerNewAnswer();

document.querySelector('.poll')
        .addEventListener('click', poll.registerNewAnswer.bind(poll)); 
        // bind를 안하면 document의 this를 가르키기 때문에 오류가 발생한다. 

// Bonus
poll.displayResult.call({answers: [5, 2, 3]})
poll.displayResult.call({answers: [1, 5, 3, 9, 6, 1]})
