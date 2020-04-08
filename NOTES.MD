# 463. Working with useSelector() and useDispatch()
- Wow, we can use `useDispatch` Hook provided by `react-redux` to now call the functions without using props in front of them. The whole thing looks cleaner. 
- We also got rid of mapstatetoprops and mapdispatchtoprops and we no longer need `connect`
- I like this method. It seems cool.
- But we had issue with `onInItIngredient` firing all the time inside that `useEffect` It's being executed all the time. 
- We wrapped it with  `useCallback` to prevent this behavior. So it only runs once when the component mounts. 
- Not it only runs once.