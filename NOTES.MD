# 360. Testing Containers
- Testing our containers is different from normal components.
- That's because our containers are connected to Redux.
- If not because they're connected, testing them would have been easy and exactly like the way we test our normal presentational components
- We need to export the class or container. We can expect Redux to work normally. We'll just mock the data we expect to get.
- If you have issues with `App.test.js` Just delete that file and that's it. 
- When you're getting data from Redux or somewhere else in a container, all you have to do is simply create a data that mocks what you expect. Just watch the way we did it here. You need to do exactly the same thing. 