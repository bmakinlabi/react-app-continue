# 223. Setting Up and Rendering Routes
- we're importing `Route`
- When you put the `path="/"` there, and you see a link on the navigation, React may show the same content of the home page there too. To avoid this, just use `exact` on the Route. It means you want exactly the path specified. 
- Note that you can repeat the same path on different routes. React will render both of them together on the page.
- You can use as many Routes on the same page as you want.  
- We're going to load the component we want to load in the next lecture.  