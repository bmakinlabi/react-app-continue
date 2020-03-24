# 263. Updating State Immutably
- Keep something very important in mind.
- When you're working with redux and returning state, only the touched property or object is returned. The other untouched aren't part of the new state.
- In this example, before updating this code, only counter is returned. 
- But now that we've added results to the initial state, only counter would still be returned if we don't also work on results.
- So, it means that counter is the new state and results is removed.
- We have to copy (clone) the whole of the state and watch how the instructor did it with `object.assign()` and `...state`. Of course we've been using `...state` before now. That's the spread operator.
- Note that we're returning a new state. 
- Note that when you're touching an array in the state and you don't want to touch the original, which you should do at all, use `concat` instead of `push`. `Push` will touch the original state even though you're using the spread operator.
- Wow. We're storing result in a list. 