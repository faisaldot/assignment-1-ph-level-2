function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

console.log(formatString("Hello"));
console.log(formatString("Hello", false));
console.log(formatString("Hello", true));

type FilterByRating = {
  title: string;
  rating: number;
};

function filterByRating(items: FilterByRating[]): FilterByRating[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book b", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const result = filterByRating(books);

console.log(result);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  // return arrays.flat();
  return ([] as T[]).concat(...arrays);
}

const resultOne = concatenateArrays(["a", "b"], ["c"]);
const resultTwo = concatenateArrays([1, 2], [3, 4], [5]);

console.log(resultOne);
console.log(resultTwo);

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");

myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

const processValueResult = processValue("Bangladesh");
const processValueResultTwo = processValue(10);

console.log(processValueResult);
console.log(processValueResultTwo);

interface Product {
  name: string;
  price: number;
}

function getMostExProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    const result = products.reduce((acc, curr) =>
      curr.price > acc.price ? curr : acc
    );
    return result;
  }
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

const getMostExProductResult = getMostExProduct(products);
const getMostExProductResultNull = getMostExProduct([]);
console.log(getMostExProductResult);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

const getDayResult = getDayType(Day.Sunday);

console.log(getDayResult);

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Negative number not allowed"));
    }
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
