# 267. Combining Multiple Reducers
- We can have multiple reducers. Although they can only be one reducer.
- React lets us split our reducers and funnel them through just one.
- We're creating a reducer for one property in the state. Like the counter state property is managed by the counter.js and the result state property is managed by result.js reducer. 
- Note that we deleted our `reducer.js` now.
- We need to merge our `counter.js` and `result.js` reducers files together. 
- Because of the way Redux has now nested our state, we have to access them like this: `ctr: state.ctr.counter` from this `ctr: state.counter`
- It's the nesting thing. 
- Pay attention to every little change here. You may have to always come back to learn about combining multiple reducers.
- And note that using `date` as the key isn't a good solution. We just used it in this course. If we hit the button frequently we get an error telling us that they have the same key. 