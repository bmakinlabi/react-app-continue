# 291. Where to Put Data Transforming Logic?
- The only place we can execute async code is inside our action creators.
- Where to put logic code that really update the state:
- Action creators ------------------------------ Reducer
- Can run Async doe -------------------------- Pure, sync Code only!
- Should prepare the staet update too much ------------- Core Redux concept: reducers update the state.
- Update the state inside the reducer. That is where you should put core data.
- Be consistent with which one you choose. 