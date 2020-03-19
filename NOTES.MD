# 245. Loading Routes Lazily
- Learning about lazy loading (also called code splitting) is the technique of downloading only what you need.
- You'll see the `bundle.js` in the network.
- That's the full bundle of all the components and JS.
- We can make JavaScript render what will need alone. And how you do that is what was explained in this video.
- Note that `import()` will only load something when it's needed.
- And after doing this, we went back to network on the browser and found that `1.chunk.js` was loaded. That means that we're only only that page. 
- This is how you load components asynchronously
- So you only load a component when needed.