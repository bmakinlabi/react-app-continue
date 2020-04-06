# 441. Loading Errors & State Batching
- Wow I learned the shortcut for the ternary operator and it's cool.
- The `&&` signs means what's on the right will only gets rendered if what's given on the left side is true.
- Because `fetch` is a promise, we can handle an error by adding catch to the end of the `then` block.
- If you have two states in the same function for example, React will run them together synchronously. It means that the first one won't causes re-render and the other one will cause it's own separate render. No. They'll both run together. Just for you to keep this in mind. 