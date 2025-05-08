/* function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

console.log(formatString("Hello"));
console.log(formatString("Hello", false));
console.log(formatString("Hello", true)); */

/* Problem 2 */

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
