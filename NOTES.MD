# 471. Getting Started with a Custom Hook as a Store
- Learning how to manage state globally with React and React Hooks.
- Remember that in `useEffects` `return` is needed for cleanup.
- Always keep in mind that if something is from hooks or libraries like redux, you don't have to include it as a dependency in `useEffect`. React will take care of that automatically.
- But you can add it there so that you don't get confused in the future. That's exactly what the instructor is doing here. 