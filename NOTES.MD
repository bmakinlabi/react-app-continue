# 231. Styling the Active Route
- We can use `NavLink` instead of `Link` because it allows us to do some styling for the link. We're using it because it tells us the active link. It applies the class active to the link. 
- Not just in `path` for `Route`, React also treats `/` in the `to` of `NavLink` as if it's not exact.
- Due to this you need to add `exact` to tell React that exactly the link. 
- Using the active link to add styling attributes to the current active Url
- https://stackoverflow.com/questions/47338077/react-router-v4-navlink-vs-link-benefits