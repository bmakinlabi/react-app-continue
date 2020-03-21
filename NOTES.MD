# 247. Routing and Server Deployment
- Note that the user sends request to the server and the server doesn't know how to handle the requests.
- It's your React app that knows which routes to load to the user. You have to configure this part.
- And how do you do that?
- Make sure you put the base folder or file you're serving your app from in the Browser Router. If you're serving it from a sub-directory, make sure you put it there too.