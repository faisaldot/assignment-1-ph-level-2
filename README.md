## What is the use of `keyof` keyword in TypeScript? Provide an example?

We use the `keyof` keyword because we want to get all keys from a type or
interface, the `keyof` operator give us all keys of a type as a union. It
useful when we want to make function or type that work with dynamic object
keys.

### Example

```Typescript

  interface Person {
    name: string;
    age: number;
    country: string;
  }

  type PersonKey = keyof Person;

  function getPersonProperty(obj: Person, key: PersonKey){
    return obj[key]
  }


```

## Provide an example of using union and intersection types in TypeScript.

```typescript
// Union
type favoriteAnime = "One Piece" | "Naruto" | "Vinland Saga" | "Demon Slayer";

// Intersection

type Person = {
  name: string;
  age: number;
};

type Developer = {
  skills: string[];
  experience: number;
};

type DeveloperPerson = Person & Developer;
```

-- Blog post kivabe likhbo bhujina, bhuji kintu likte pari na );
