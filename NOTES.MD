# 399. CSS Transition & Animations Limitations
- The limitation of using CSS Transitions and animations is that our HTML and CSS code are always in the DOM. Not just visible when they're not. 
- Doing it the way the instructor leaves it work 50%. We'll see the open animation, but when it's time for close, React doesn't even wait for the animation to finish before it removes it from the DOM.
- So, we can't do it like this. Fortunately, there's a better tool that we can use.
- Let's talk about it in the next lecture. 