// problem 1
// შექმენით ფუნქცია რომელიც დააბრუნებს რიცხვი კენტია თუ ლუწი

function showMessage(answer) {
  if (answer % 2) {
    console.log("odd");
  } else {
    console.log("even");
  }
}

// შენი ფუნქცია უნდა აბრუნებდეს რიცხვი კენტია თუ ლუწი, კონსოლში არ უნდა ლოგავდეს.
// გამოიყენე return ქივორდი.

let answer = Number(prompt("Please enter the Number"));
showMessage(answer);

// problem2
// შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება საკუთარ სახელს და შემდეგ დააბრუნებს მას.
//კონსოლში გამოიტანეთ რა შეიყვანა მომხმარებელმა
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

let value;

while (true) {
  value = prompt("Enter your name", "");
  if (value) break;
}

alert("your name is: " + value);

console.log(value);

// problem 3
// კონსოლში დაბეჭდეთ 1-100 მდე ყველა ლუწი რიცხვი

let i = 0;
while (i < 100) {
  i += 2;
  console.log(i);
}

// problem4
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვები მანამ სანამ არ შეიყვანს უარყოფით რიცხვს

let number;

while (true) {
  let number = prompt("Enetr the number", "");
  if (number < 0) break;
}

// problems 5
// let numbers = [10,12,42,55,100,90,32,55];
// let result=[];
// დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს მასივს, (პარამეტრად გამოიყენეთ numbers მასივი)
// პარამეტრად მიღებულ მასივში მოძებნის ყველა ელემენტს რომელიც იყოფა 5-ზე უნაშთოდ და ჩაწერს result მასივში.

let numbers2 = [10, 12, 42, 55, 100, 90, 32, 55];

function arrayNumbers(array) {
  let result = [];
  for (const elements of array) {
    if (elements % 5 == 0) {
      result.push(elements);
    }
  }
  return result;
}

console.log(arrayNumbers(numbers2));

// problem 6
// let names = ["Gio","Luka","Nika","Ani","Eka","Nini","Sopo"];
// კონსოლში დაბეჭდეთ names მასივში არსებული ყველა ელემენტი, გამოტოვეთ მხოლოდ ნიკა.
// ლუპის საშუალებით.

let names = ["Gio", "Luka", "Nika", "Ani", "Eka", "Nini", "Sopo"];

for (let i = 0; i < names.length; i++) {
  if (names[i] == "Nika") continue;

  console.log(names[i]);
}

//problem7

//შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს მასივს რომელშიც იქნება მინიმუმ 5 user-ის ობიექტი
// user ობიექტი უნდა ქონდეს შემდეგი properties სახელი,გვარი,სქესი,ასაკი.
// თუ ფუნქციაში გადაცემულ პარამეტრში არ იქნებ მინიმუმ 5 მომხმარებელი დააბრუნეთ წინადადება: "მასივში აუცილებლად უნდა იყოს მინიმუმ 5 მომხმარებელი"
// თუ მინიმუმ 5 მომხმარებელი იქნება დააბრუნეთ თითოეული მათგანის სრული სახელი, გვარი და ასაკი.
// (array.length გამოიყენეთ იმისთვის რომ გაიგოთ არის თუ არა მასივში შესაბამისი რაოდენობის ელემენტი)

function usersInfo(info) {
  if (info.length < 5) {
    return "მასივში აუცილებლად უნდა იყოს მინიმუმ 5 მომხმარებელი";
  }

  let userArray = [];

  for (const user of info) {
    userArray.push(user.userName + " " + user.age + " " + user.surName);
  }
  return userArray;
}

const user1 = {
  userName: "Jhon",
  age: 22,
  surName: "doe",
};

const user2 = {
  userName: "Jhane",
  age: 22,
  surName: "doe",
};

const user3 = {
  userName: "Jim",
  age: 22,
  surName: "doe",
};

const user4 = {
  userName: "Luka",
  age: 22,
  surName: "doe",
};

const user5 = {
  userName: "Nika",
  age: 22,
  surName: "doe",
};

const users = [user1, user2, user3, user4, user5];

console.log(usersInfo(users));

// problem8

// დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს მასივს და გადაცემულ მასივში იპოვის და დააბრუნებს ყველაზე დიდ რიცხვს.

function maxNumber(info) {
  let maxnum = info[0];

  for (const num of info) {
    if (num > maxnum) {
      maxnum = num;
    }
  }
  return maxnum;
}

const numbers = [
  1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
  70, 34, 43, 189,
];

console.log(maxNumber(numbers));

// problem9

// დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს მასივს და გადაცემულ მასივში იპოვის და დააბრუნებს ყველაზე პატარა რიცხვს.

function minNumber(info) {
  let minnum = info[0];

  for (const number of info) {
    if (number < minnum) {
      minnum = number;
    }
  }
  return minnum;
}

const numbers1 = [
  1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
  70, 34, 43, 189,
];

console.log(minNumber(numbers1));
