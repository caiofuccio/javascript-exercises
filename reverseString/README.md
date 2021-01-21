# Exercise 02 - Reverse a String.

Write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

## Learning Topics

- Conversion between strings and arrays.
- Strings and arrays methods.


Side notes:
- The code could be simplified without the need of multiple variables creation:

const reverseString = function (str) {
  return \[...str].reverse().join(");
};

I'll leave it the way it is for future examples of "what not to do"!

- The split function used as split("") could represent problems for texts that have emojis or symbols that are made of surrogate pairs, as seen [here](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402). A better solution would be the one seen above, using the spread operator.