# 460. Using React.memo() & More!
- You can search on your project looking for a certain word. For example, in this lecture, we searched the project looking for `class` to find more class-based components. 
- I used `command + shift + F` to search.
- Instead of using shouldComponentUpdate which we use in class-based components. We don’t need that again. We can simply use `React.memo`
- But in the modal.js component, we also have where we check if `props.modalClosed` how do we do this check.
- `React.memo` to the rescue again, we can pass a second argument into it, We pass that if the props are equal, then continue. 