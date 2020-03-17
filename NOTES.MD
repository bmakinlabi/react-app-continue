# 214. Retrieving Data from the Backend
-  Of course, you can manually add data to the database at Firebase.
- We're doing that now, taking the data to the state in `BurgerBuilder.js` to the database at Firebase.
- We're doing it so that we can manually retrieve the data. 
- By clicking on the entry object data like `ingredients` on Firebase database, you'll get a URL to it. 
- In this case: `https://react-my-burger-6c464.firebaseio.com/ingredients`
- Because we used to check ingredients and iterate over them when immediately the app load, we need to stop doing that because it's return errors since we've now changed `ingredients: null` initially.
- Wow, now when we load the app, we could see 1 meat if that's what in the database.
- Wow. I learned a lot in this lecture. 