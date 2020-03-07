# 184. Improving Performance
- In this example, I realize the perfect scenario to use `componentDidUpdate()`
- You use it usually when you know that something will update in the future (show on the screen). It's just there in the background before the real update happens. 
- Perhaps there's more to learn about Lifecycle in the future of this course.
- We improved our app. We make sure that we don't unnecessarry update our application until `Modal` is called. Remember that `OrderSummary` is inside `Modal`
- So, the `componentDidUpdate()` in `OrderSummary` isn't showing in the console until we want `Modal` to show because we have the `shouldComponentUpdate()` inside `Modal` which controls when it updates. 
- The console will now bring `[OrderSummary] WillUpdate` and then `[Modal] WillUpdate` This improves performance.
- Wow, I'm learning about performance improvement