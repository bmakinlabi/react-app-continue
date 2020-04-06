# 438. Working with Refs & useRef()
- Each type generates a request (when the user is trying to search)
- We want to avoid that. Instead we want to only search when the user is typing after some 500 miliseconds.
- We're using  `useRef` to know if the current value isn't the same with the entered value after 5 seconds, don't fetch data.
- But if the current value is the same with the old value, then fetch data.
- Wow, ref is really powerful. I'm sure there're other ways we could do it, but it's really easy with this `useRef` thing.
- Still a lot of room to make it perfect. 