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
