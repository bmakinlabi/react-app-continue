# 439. Cleaning Up with useEffect()
- You can return something in `useEffect()`
- And it always have to be a function. 
- It's a clean up function. 
- If you have `[]` as dependencies (i.e. the effect only runs once), the cleanup function runs when the component gets unmounted. 
- It clean up function runs before the `useEffect` function runs again. 
- Wow, it's how you clear a timer in JavaScript.
- It's more memory efficient as you don't have all those old timers going on behind the scene in the memory.