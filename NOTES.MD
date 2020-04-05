# 422. Diving Deeper into Sagas
- `Call` allows you to call some function on some object.
- It allows your function testable. 
- `all` allows us to run our actions or sagas concurrently. It doesn't pause
- Good if you want to run multiple tasks simutanously 
- `takeLatest` only runs the latest one. It cancels all other running sagas and run the latest.
- Learn more at - https://redux-saga.js.org/
- Check the API Reference to learn more.
- Read the documentation.