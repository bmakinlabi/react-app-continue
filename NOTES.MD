# 284. Adding Middleware
- What is middleware?
- We can add a middle between action and reducer.
- We add middleware in between them before the action reaches the Reducer.
- Let's see it in action. 
- Watch it very well inside `index.js` -- that's how you create a middleware in Redux.
- You can pass one more one middleware to `applyMiddleware`. They'll be executed in order. 
- We'll see the use cases for middleware later in this course.
- But the tool is even cool for logging things into the console to see what's happening.
- You can see the state and a lot more. It's quite good for debugging. 