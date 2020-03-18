# 235. Using Switch to Load a Single Route
- Use `Switch` to tell React to render the first URL that matches the request and stop.
- The order of the Routes is important when using Switch. 
- We can do this:
```js
<Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
```
- And we can do this too:
```js
                <Switch>
                <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>