# 266. Creating a Custom Dynamic Input Component
- Forget to put `<Button>` where it should have been.
- Because React doesn't know `inputType` of the `Input` it throws an error but it still works. Before react 16, it wouldn't have allowed it at all.
- So what's happening now is that we can work with it but we'll have to use `inputtype` instead to make it work. 