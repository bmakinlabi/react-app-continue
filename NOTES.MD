# 253. Navigating to the Checkout Page
- How to get those React Router Dom in any component. It's an advanced way you can quickly get those magic props that you React Router Dom gives you.
- It's the kind of using a higher order component just the way the instructor has done it.
- If you ever need direct access match to history and direct location for example and you don't manually want to pass it on from the top level component. We didn't save it. 

```
import { withRouter } from 'react-router-dom';

/// and inside the burger component, we did this:
// console.log(props);

export default withRouter(burger);
```
- How we push history (where to go next when something happens. )