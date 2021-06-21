'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section


// 111. Enhanced object literals
const weekdays = ['mon', 'tuw', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHour = {
  [weekdays[3]]: { // 🔺weekdays 구문을 이용
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, 
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHour, // 111. ES6 enhanced object literals
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  // order: function(starterIndex, mainIndex) { // 이전 방식
  order(starterIndex, mainIndex) { // 현대 방식 (같은 효과)
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },    
  
  orderDelivery: function ({starterIndex = 0, mainIndex, time, address}) {
    console.log(`주문이 들어왔습니다! [${time}] ${address}에서 ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}를 주문하였습니다.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'kyeongmyeongload, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// starterIndex 선택안한 주문
restaurant.orderDelivery({
  time: '22:30',
  address: 'kyeongmyeongload, 21',
  mainIndex: 1,
});

// 103 배열분해
// 변수 선언
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr; //  배열이 아닌 구조화 할당 destructuring
console.log(x, y, z);
console.log(arr); // 원래 배열은 영향받지 않음

const [first, ,second] = restaurant.categories;
console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main]; // 단순한 재할당이므로 const나 let필요없음
console.log(main, secondary);

// 2개의 값을 반환하는 함수
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// 중첩된 비구조화 (destructuring)
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

const [i, ,[j,k]] = nested; // 중첩된 배열을 분해하여 작동
console.log(i,j,k);

// Default values 기본값
const [p=1, q=1, r=1] = [8,9];
console.log(p, q, r); // r은 정의되지 않았지만 undefined 대신 1로 출력됨

// 104 객체분해

const { name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
// 새로운 변수 이름선언
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// 새로운 변수 이름선언 예시
// 기본 값
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// 변수 변경
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// let {a, b} = obj; //{}를 넣으면 자바스크립트는 코드블럭을 찾지 못하는 오류가 발생
({a, b} = obj); // 괄호로 묶는 트릭
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c} } = openingHours;
console.log(o, c); //console.log(open, close);


// 105 spread operator

const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const justArr = [1,2, arr]
const newArr = [1,2, ...arr]; // 스프레드 연산자 : 배열에서 모든 요소를 꺼냄
console.log(justArr);
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'hamberger'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
//console.log(`${...str} 템플릿 리터럴은 사용불가`);


// 106 into array

// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, ...restaurant.starterMenu,];
  console.log(pizza, risotto, otherFood);
  
  // Objects
  const { sat, ...weekdays } = restaurant.openingHours;
  console.log(weekdays);
  
  // 2) Functions
  const add = function(...numbers) { // rest parameters
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
    
  }
  add(2, 3)
  add(5, 3, 7, 2);
  add(8, 2, 5, 3, 2, 1, 4);
  
  restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // 메인재료와 부차재료
restaurant.orderPizza('mushrooms');

// 107 Short Circuiting (&& and ||)

console.log( undefined || 0 || '' || 'Hello' || 23 || null);
console.log( 'Hello' && 23 && null && 'jonas'); // ||와 반대, falty를 출력

// 108 nullish coalescing operator ES2020에 도입됨

const guests = restaurant.numGuests || 0;
// const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null 과 undefined 만 반환 ( 0 이나 ''에는 반환되지 않음)
// const guestCorrect = restaurant.numGuests ?? 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  
  printGoals : function (name) { // task 6
    for (let i=0; i<game.scored.length; i++){
      if (name==game.scored[i]){
        console.log(`${game.scored[i]}는 골을 넣었으며 게임 스코어는 ${game.score}입니다!`);
      }
    }
  },
};

const { players : [players1, players2] } = game; // 플레이어 배열 생성
//const [players1, playes2] = game.players;
console.log(players1);

const [gk, ...fieldPlayers] = players1 // 골키퍼, 필드플레이어 배열 생성
console.log(gk)
console.log(fieldPlayers)

const allPlayers =  [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic']; // 배열 변수 추가
console.log(players1Final);

const {team1, x, team2} = game.odds; // 변수 이름 지정
const [,draw,] = [team1, x, team2];
// const { odds : { team1, x: draw, team2 },} = game;
console.log(draw);

game.printGoals('Gnarby');

// 낮은 배당률의 팀은 이길 확률이 높다. 더 이길 것 같은 팀을 출력해라
team1 < team2 ? console.log("team1이 team2보다 이길 확률이 높습니다!") : console.log("team2이 team1보다 이길 확률이 높습니다!");

// team1 < team2 && console.log("team1이 team2보다 이길 확률이 높습니다!");
// team1 > team2 && console.log("team2이 team1보다 이길 확률이 높습니다!");


// 110. Looping Arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // for-of 루프

// for (const item of menu.entries()) { //  예전방식.  entries : 인덱스 
//   console.log(`${item[0] + 1}: ${item[1]}`); //
// } 
for (const [i, el] of menu.entries()) { // 현대방식(아이템 구조해체)
  console.log(`${i + 1}: ${el}`);
} 


//112 Optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon) 
console.log(restaurant.openingHours.mon.open);

// WITH optional chaining ?. // 모든 속성이 정의되지 않았다면 바로 undefined 반환
console.log(restaurant.openingHours.mon ?. open); 
console.log(restaurant.openingHours?.mon ?. open); 

const days = ['mon', 'tuw', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; 
  // 대괄호표기법, sat의 open시간은 0이지만 || 연산자를 사용하면 closed로 뜨기 때문에 ?? 연산자(nullish)를 사용
  console.log(`On ${day}, we open at ${open}`);
}

// Methods 함수가 비어있는지 확인
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist'); // undefined를 반환 -> nullish 연산자로 인해 텍스트 반환

// Arrays 배열이 비어있는지 확인
const users = [
  {name: 'Jonas', email: 'hello@jonas.io'}
];
// if(users.length > 0) console.log(users[0]?.name ?? 'User array empty');
// else (users[1]?.name ?? 'User array empty'); // 선택적 연결 연산자를 사용하지 않을 때
console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');


// 113 Looping objects: object keys, values, and entries

const properties = Object.keys(openingHour); // Object.keys(배열) 배열의 값
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHour)
console.log(values);

// Entire object
const entries = Object.entries(openingHour);
console.log(entries);

// [key, value]
for(const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


// Coding Challenge #2

const scored = ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'];

const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored,
  date: 'Nov 9th, 2037',
  odds,
}

// task 1. game.score 배열과 각각의 플레이어 이름을 콘솔에 출력하여라
// const  playersName  = Object.values(scored)
// let count= 1
// for ( const player of playersName)
// console.log(`Goal ${count++}: ${player} `); 

// task 1.
for(const [i, player] of game.scored.entries())
console.log(`Goal ${i + 1}: ${player}`);

// task 2. loop를 이용해 odd의 평균을 구하고 출력해라
// let average = 0
// const oddsValues = Object.values(odds)
// for (let sum of oddsValues){
  // average += sum
  // }
  // console.log(average/oddsValues.length); 
  
  // task 2.
  let average = 0;
  for (const odd of Object.values(game.odds))
  average += odd;
  console.log(average);
  average /= Object.values(game.odds).length;
  console.log(average);
  
  
  // for ( const a of Object.keys(odds)){
    //   const b = game[a];
    //   console.log(`Odd of victory ${b}: ${odds[a]}`);
    // }
    
    // task 3. o
    for(const [team, odd] of Object.entries(game.odds)) {
      const teamStr = team  === 'x' ? 'draw' : `Victory ${game[team]}`
      console.log(`Odd of ${teamStr}: ${odd}`);
    }
    
    
    // 115. set
    // 세트는 기본적인 컬렉션으로, 중복을 가질 수 없음, 인덱스 없음, 항목삭제시 array에서 삭제할 때 보다 빠름
    const ordersSet = new Set(['Pasta', 'Pizza','Pizza','Risotto','Pasta','Pizza',]); // 컬렉션 형태, 일반적인 iterable인 배열 예시로 사용
    console.log(ordersSet)
    
    console.log(new Set('Pasta'));
    
    console.log(ordersSet.size);
    console.log(ordersSet.has('Pizza'));
    console.log(ordersSet.has('Bread'));
    ordersSet.add('Bread');
    ordersSet.delete('Pizza');
    console.log(ordersSet.has('Bread'));
    console.log(ordersSet.has('Pizza'));
    // ordersSet.clear();
    console.log(ordersSet);
    
    for(const order of ordersSet) {
      console.log(order);
    }
    
    const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
    
    const staffUnique = new Set(staff);
    // const staffUnique = [...new Set(staff)]; // 배열형태로 만들 수 있음
    console.log(staff);
    console.log(staffUnique);
    
    
    // 116. Map
    // object처럼 키와 값을 가지는 데이터구조지만, object에서 키는 string 형태인 반면, map에서는 모든 유형이 가능하다.
    
    const rest = new Map();
    rest.set('name', 'Classiaco Italiano'); // Map에 값을 추가하는 기본적인 방식
    rest.set(1, 'Firenze, Italy');
    console.log(rest.set(2, 'Lisbon, Portugal'));
    
    rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(')
    
    console.log(rest);
    
    console.log(rest.get('name')); // map의 데이터를 읽는 방법
    console.log(rest.get(true)); 
    
    const time = 21;
    console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
    
    console.log(rest.has('categories'));
    rest.delete(2);
    console.log(rest);
    rest.set([1,2], 'Test')
    console.log(rest);
    
    console.log(rest.get[1, 2]); // heap 영역에서 'Test'의 [1,2] 와 다른 객체이다
    
    const arr = [1, 2];// 위의 문제를 해결하기 위한 방안
    rest.set(arr, 'Test');
    console.log(rest.get(arr));
    console.log(rest);
    
    rest.set(document.querySelector('h1'), 'Heading'); // document 예시
    console.log(rest);
    
    
    // 117. Map: iteration 
    // Map의 요소를 편집할 때 set 메서드가 아닌 다른 설정방법
    
    //const rest = new Map(); // 기존방식
    //rest.set('name', 'Classiaco Italiano'); // Map에 값을 추가하는 기본적인 방식
    
    const question = new Map([
      ['question', 'What is the best programming language in the world?'],
      [1, 'C'],
      [2, 'Java'],
      [3, 'JavaScript'],
      ['correct', 3],
      [true, 'Correct🎉'],
      [false, 'Try agian!'],
    ]);
    console.log(question);
    
    // Convert object to map
    console.log(Object.entries(openingHour));
    const hourMap = new Map(Object.entries(openingHour));
    console.log(hourMap);
    
    // Map iteration
    console.log(question.get('question'));
    for (const [key, value] of question) {
      if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
    }
    // Quiz app
    // const answer = Number(prompt('Your answer')) // 문자열 답변을 넘버로 바꿔줌
    // console.log(answer);
    
    // if (answer === question.get('correct'))
    //   console.log(question.get(true));
    // else console.log(question.get(false));
    
    // Convert map to array
    console.log([...question]);
    console.log([...question.keys()]);
    console.log([...question.values()]);
    
    
    // 118. Summary: Which data structure to use?
    
    // arrays vs sets
    // set은 중복된 값을 없애줌, array보다 빠름
    
    // objects vs maps
    // maps은 key의 데이터형식이 자유로움, 반복이 쉬움, 크기를 계산하기 쉬움, 빠름
    // 하지만 JSON과 같은 데이터로 작업할 때에는 objcet의 형태로 데이터를 작업하게 됨
    
    // ES6에서 나온 set과 map이 좋은 성능을 나타내지만, array, object가 기존 개발자들에게 익숙하기 때문에 더 많이 쓰게 될 것
    
    
    // 119. Coding challenge #3
    
    const gameEvents = new Map([
      [17, '⚽ GOAL'],
      [36, '🔁 Substitution'],
      [47, '⚽ GOAL'],
      [61, '🔁 Substitution'],
      [64, '🔶 Yellow card'],
      [69, '🔴 Red card'],
      [70, '🔁 Substitution'],
      [72, '🔁 Substitution'],
      [76, '⚽ GOAL'],
      [80, '⚽ GOAL'],
      [92, '🔶 Yellow card'],
    ]);
    
    // task 1.
    // const gameEvent = new Set()
    // for (const [key, value] of gameEvents) 
    // gameEvent.add(value); 
    const gameEvent = [...new Set(gameEvents.values())];
    console.log(gameEvent);
    
    // task 2.
    gameEvents.delete(64);
    console.log(gameEvents);
    
    // task 3.
    const time = [...gameEvents.keys()].pop(); // 배열의 마지막 값
    console.log(time);
    
    console.log(`"An event happened, on average, every ${time/gameEvents.size} minutes"`);
    
// task 4.
for (const [key, value] of gameEvents)
if (key < 45)
console.log(`[FIRST HALF] ${key}: ${value}`);
else
console.log(`[SECOND HALF] ${key}: ${value}`);


// 120. Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); // 소문자 p 찾을 수 없음

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air (4 ~ 7)

console.log(airline.slice(0, airline.indexOf(' '))); 
console.log(airline.slice(airline.lastIndexOf(' ')+1)); 

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat!');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));


// 121. Working with Strings Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jonAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io\n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();  // trim 공백제거
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email);

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = '모든 승객들은 대기 탑승구에서 23 탑승구로 이동하시기 바랍니다!';

console.log(announcement.replace('탑승구', '게이트'));

console.log(announcement.replace(/탑승구/g, '게이트')); // /  /g를 통해 모든 탑승구 변환

const plane = 'A320neo'
console.log(plane.includes('A320')); // A320이 포함되는지 boolean으로 확인
console.log(plane.startsWith('Air')); // Air으로 시작하는지

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

const checkBaggage = function(items) {
  const baggae = items.toLowerCase();
  if(baggae.includes('knife') || baggae.includes('gun')){
    console.log('You are NOT  allowed on board');
  } else{
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// 122. Working with Strings Part 3

// split, join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // join: 콤마 사이에 글자삽입
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];
  
  for(const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); 방법1
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // 방법2
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis')
capitalizeName('kim taejung')

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str .slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard('10023023013513'));
console.log(maskCreditCard(1583186346));

// Repeat
const message2 = '기상악화... 모든 운항이 지연되고 있습니다...\n';
console.log(message2.repeat(5));


// 123. Coding Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



document.querySelector('button').addEventListener("click", function(){
  const texts = document.querySelector('textarea').value.split('\n');
  for (const [i, text] of texts.entries()){
    const afterText = text.trim().split('_')
    const finalText = afterText[0].toLowerCase() + afterText[1][0].toUpperCase() + afterText[1].slice(1);
    console.log(`${finalText.padEnd(20,' ')}${'✅'.repeat(i+1)}`);
  }
});


// 124. String methods practice

const getCode = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴': ''} ${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h ')})`.padStart(46);
  console.log(output);
}

*/

// Sets, Maps 복습

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet.size);
console.log(orderSet.length); // 배열처럼 length 안됨 주의!
console.log(orderSet.has('Pasta'));
// console.log(orderSet.includes('Pasta')); // 배열처럼 includes 안됨! has 사용
console.log(orderSet.add('Bread'));
// console.log(orderSet.push('Bread')); // 배열처럼 push 안됨! add 사용
orderSet.delete('Risotto');
// orderSet.pop('Risotto'); // 배열처럼 pop 사용 안됨! delete 사용
console.log(orderSet);
console.log(orderSet[0]); // 배열처럼 인덱스 검색안됨. SET에는 인덱스가 없음
for(const order of orderSet) console.log(order); // Set에서 반복사용

// Map 요소 추가방법
const rest = new Map();
rest.set('name','Classico Italiano'); 
rest.set(1,'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close',23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

// Map 데이터 읽는 방법
console.log(rest.get('name')); 
console.log(rest.get(true));
const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'))

// Set과 비슷한 함수를 사용
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest); 
rest.clear();
console.log(rest.size);

// 오브젝트를 맵키로 사용하는 방법
rest.set([1,2], 'Test')
console.log(rest.get([1,2])); // Hip에서 같은 오브젝트가 아니기 때문에 불러오지 못함
const arr = [1,2];
console.log(rest.set(arr, 'Test')); // 해결법

// Map 요소 추가방법 2
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// 오브젝트를 Map으로 변환
console.log(Object.entries(openingHour));
const hoursMap = new Map(Object.entries(openingHour));
console.log(hoursMap);

// Map 반복
console.log(question.get('question'));
for (const [key, value] of question) {
if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer')) // 숫자로 받아야하기 때문에 Number
// console.log(question.get(3===answer));

// Map을 오브젝트로 변환
// console.log([...question]);
console.log(question.entries()); // console.log([...question]); 와 같음
console.log([...question.keys()]);
console.log([...question.values()]);

const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'],
]);

const event = [...new Set ([...gameEvents.values()])]
console.log(event);

gameEvents.delete(64);
console.log(gameEvents);
let times = 0;
for(const [time, event] of gameEvents){
  times = times + time;
  if (time<45)
  console.log(`[FIRST HALF] ${time} : ${event}`);
  else console.log(`[SECOND HALF] ${time} : ${event}`);
}
console.log(times/90);