# 340. Displaying User Specific Orders
- The function call was something I corrected because the instructed own looks different to mine.
- Queries like `orderBy`, `equalTo` and others are understood by Firebase. You may want to learn Firebaes and how its queryParams works. This would be interesting. 
- If you want to be able to filter data, you have to adjust your rules. 
- We wrote stuff like `.indexOn` 
- Here's how we wrote it at the end:
```js
{
  "rules": {
    "ingredients": {
      ".read": true,
      ".write": true,
    },
    "orders": {
      ".read": "auth != null",
      ".write": "auth != null",
        ".indexOn": ["userId"]
    }
  }
}
```
- Wow. We're only getting orders from a specific `userId`