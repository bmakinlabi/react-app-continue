# 292. Using Action Creators and Get State 
- If you want to access the current state before returning anything within your async code, you can do that.
- You'll need to use the `getState()` method.
- But don't use this feature too much. Instead do it normally and pass it as an argument. 
- Instructor doesn't like using `getState()` this way. 