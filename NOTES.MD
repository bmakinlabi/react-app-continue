# 331. Accessing Protected Resources
- We set our rules in Firebase while creating the database to grant access to everyone.
- Now we go to our rules in Firebase and change `.read` and `.write` values to `"auth != null"`
- We can also do it like this:
```js
{
  "rules": {
    "ingredients": {
      ".read": true,
      ".write": true,
    },
    "orders": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```
- We granted access to everyone for `ingredients`. But when they're trying to access `orders` then they need to be authenticated.
- This is the way you should do it. You can read the documentation to learn more. I haven't read it.
- Note that we could've used `getState` to get the state directly in the action but the instructor doesn't recommend that.
- We should instead get it the normal way we've been using which we did in this lecture. 