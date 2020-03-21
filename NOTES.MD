# 246. Lazy Loading with React Suspense (16.6) (Part 2)
- You have a new way of lazy loading your routes if you're using React 16.6 or higher.
- Keep in mind that you can also use it to lazy load components until when they're required
- Wow, you need to create a new application.
- The Suspense isn't working yet on server-side rendering. I think this is for future versions. It's best I don't use it at all, but to keep it in mind that it's the other version of the previous lecture. 
- If Suspense returns the normal 200 it should in the browser network, then you should just use it for loading components. Don't use it to load data. Not recommended.
- Suspense is only recommended for big code. If you're building a small app. That isn't needed. 