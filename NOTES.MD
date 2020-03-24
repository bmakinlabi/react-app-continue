# 268. Understanding State Types
- If your app isn't big there's no reason to use Redux.
- For very small app, setting up redux alone would take your time. 
- You shouldn't necessarily manage all the state through redux
- Cases of using Redux
- type--------------example ----------------------use Redux?
- Local UI state ------ Show/Hide Backdrop---------- Mostly no
- Persistent State ------ All users, all posts -------- Mostly on server or database. A bit of it (like slice) is managed by Redux.
- Client state -----------is Authenticated, Filters set by User ---------------------- Yes, use Redux for this.