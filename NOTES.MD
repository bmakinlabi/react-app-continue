# 289. Connecting the Store to React
-  Redux alone isn't connected to React.
- We need another package to connect them together.
- `npm install --save react-redux`
- You import Provider from the just installed package. It's a wrapper component. 
- Pay attention to `connect`. Connect is a function itself which returns something.
- Wow, we're now loading the state from Redux. 
- We'll be able to update the state in the next lecture.
- I had to downgrade to a lower version of `react-redux` to use this. It seems something has changed which isn't working well with the current version of React scripts. But we'll get to that later anyway. The most important thing is that this thing is working. 