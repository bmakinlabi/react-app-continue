# 179. Reusing the Backdrop
- Again we came across something we've talked about before. By using it like this `<Backdrop show/>` show automatically becomes `true` and if it's not present at all like `<Backdrop />` it'll become false because `show` isn't present. 
- We changed a functional component to class-based component here because we have to manage state there in it.
- Remember what we learned about joining classes (using selectors) `[class1 class2]`