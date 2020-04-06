# 443. Understanding useReducer()
- **Whilst the concept of reducer functions is similar, useReducer() has absolutely no connection to the Redux library!**
- We can use `useReducer` to update states. It can update multiple states together. Let's see how it works.
- Looking at the `useReducer` here. You can see that the first argument is the function. The second argument is the initial state. In this case the initial case is an empty array. The second argument is a dispatch function. It's not a setting function. it's a dispatch. We're doing the setting in our `ingredientReducer` function. 
- When working with `useReducer()`, React will re-render the component whenever your reducer returns the new state. 
- `useReducer` is really interesting. I might want to use it. But how do I decide when to use it. It really looks cool to me. and I've really liked it.