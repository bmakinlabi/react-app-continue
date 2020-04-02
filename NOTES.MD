# 347. Using Environment Variables
- You can make it difficult for people to access your state. To see what you have in there. 
- Note that the `NODE_ENV` is inside the config folder in the `env.js` file. there.
- The `process.env` is a global variable that makes it easy for us to access that variable.
- We don't want anyone to see our Redux state and see how our app is built. We want to make it difficult for them.
- Redux DevTools would now only be available in the development environment.
- 