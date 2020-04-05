# 421. Why Sagas can be Helpful
- The advantage is that our action creator files are all very lean. That's it. Not necessary better or bad.
- They now only create action. They don't run any other code, which is kind of cool.
- All our side effects code, (code that are not related to actions or reducers are now in our sagas).