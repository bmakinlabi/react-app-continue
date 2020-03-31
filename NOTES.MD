# 337. Fixing Connect + Routing Errors
- If you're having problems using connect on a higher order component like this because the props aren't being passed down, you can use `withRouter` and wrap everything with it.
- How to debug your React app to know where there're problems. Using the Chrome Dev tools, go into `Sources` and go into your folder there where your application is.
- And then you can place a breakpoint on the place the problem might be.
- After doing that, use the app normally (like in this case, input your email and password).
- Then reload the page. We'll know get stuck where the breakpoint is.
- It works fine. 
- Then move to the next place you think there might be a problem and place the breakpoint there too. 
- Somehow, the instructor was able to debug the app and find the mistakes using debugging in Chrome. That's something I need to learn about in the future.
