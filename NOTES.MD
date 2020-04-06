# 436. More on useEffect()
- We must pass when function called in the `useEffect()` into the array of the useEffect. Of course, we can't use `props` because that would mean that if anything in the component changes. And we also can't use the name of the function directly.
- Instead there's a solution. We have to use JavaScript object destructuring. 
- We pull it out of `props` and use it directly. This is a cool solution and I really like it. 
- We used Firebase query language
- We also went to Firebase rules to set somethings.
- We added the `ingredients` object in the rules to enable us filter:
```js
{
  "rules": {
    ".read": true,
    ".write": true,
      "ingredients": {
        ".indexOn": ["title"]
      }
  }
}
```
- We were having infinite loop so we commented out the `// onLoadIngredients(loadedIngredients);` in the `Search.js` file. We're going to find the problem and put it back.