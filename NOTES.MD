# 462. Setting the right useEffect() Dependencies
- When you pass an empty array to `useEffect()` the only time it'll run is when the component is mounted.
- When you pass `props` as a dependency, it'll always  run when the component re-renders. As all `props` may keep changing.
- Now, we can extract our function from props and specify it in the array for the `useEffect` It really looks cool.
- I love it. I'll make sure I get all `props` this way. It's going to be easy.  