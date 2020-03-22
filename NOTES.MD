# 257. Order Submission & Passing Data Between Pages
- If you need to pass `props` to your component then you need to use `render` instead of `component` inside the `Route`
- We used `preventDefault()` to prevent the page from reloading, but mine wasn't reloading before the author added it. Anyway, it works the same way for me.
- We're using `componentWillMount` here. It's been deprecated but I don't want to start spending too much time trying to look for my own alternative. It's time-wasting. I think I could re-arrange things a little bit for myself.
-  You'll also notice how to pass props down through the render to the component in it to make the history available.
- The instructor made a mistake by writing `totalPrice: price` effectively changing the name `price` in the initial state to `totalPrice` Maybe this simply creates a new property in the state.
- The instructor might change it in the future. But this is something not to worrry about too much. 