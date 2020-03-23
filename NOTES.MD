# 260. Dispatching Actions from within the Component
- Here, in the React app, we don't have access to store directly. We have access through connect though.
- Note that `mapStateToProps` gets the state from the store.
- And `mapDispatchtoProps` is the dispatch or dispatch action that allows us to update the state itself.
- Those two names are kind of convention and is popular in tutorials for Redux. So you can continue using it too.
- If you don't get the state you can do this. 
- `export default connect(null, mapDispatchtoProps)(Counter);`
- Note that we didn't copy the state first when returning it in the reducer because we only have counter in the first place.
- It's highly recommended that you always copy the state first if you have an object with multiple properties.
- Now, we're incrementing wow. It's so cool.