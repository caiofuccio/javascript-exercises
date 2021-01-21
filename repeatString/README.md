# Exercise 02 - repeatString

Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```


## Learning topics

- If/Else conditions.
- String methods, like repeat.


After completing the exercise I tought in another solution that could make it clearer using the ternary operator:

const repeatString = function (str, numberOfRepeats) {
  return numberOfRepeats < 0 ? "ERROR" : str.repeat(numberOfRepeats);
};