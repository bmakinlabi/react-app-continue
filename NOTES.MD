# 455. Converting withErrorHandler HOC
- Wow, I converted the unique code I wrote myself earlier when trying to deal with `componentWillMount` I used the constructor to solve the issue. Now, I don't need to do that anymore. We're using functions for everything right now.
- Note that when you want to do clean up in functional components using `useEffect`, you simply return something.