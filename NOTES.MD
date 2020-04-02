# 355. What To Test?
- You don't want to test the library, React, or Redux. These are already tested by the developers who created.
- You want to test the code you add to your application
- You also want to test the code that doesn't use those libraries you've added. 
- If you're using axios for example, you don't have to test axios. You do want to fake test how you use the data that you're getting.
- Don't test complex connections within your app. Don't test too much of a component that affects several other components and test those too.
- You do want to make those simple tests inside the components itself and see what it gives out or what happens when a button is clicked for example. YOu don't want to test if other components change when you click one button in a component. That'll be too complex.
- You can read some testing guides.
- Test isolated units!!
- Do test conditional outputs